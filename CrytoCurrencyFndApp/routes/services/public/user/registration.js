var config = require('../../../../modules/config');
var User = require('../../../../models/user');

var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var nodemailer = require('nodemailer');
var axios = require('axios');
var mongodb = require('mongodb');

/* GET home page. */
router.get('/', function(req, res, next) {
    var user = new User();
});

function availableUsername(req, res, next){
    var username = req.params.username;
    var collection = config.env.app.db.collection(config.env.collections.users);
    
    var filter = {
        "account.username" : username
    };
    
    collection.count(filter, function(error, count){
        res.json({available: count===0});
    });
};

function getCaptchaSiteKey(req, res, next){
    res.json({siteKey:config.env.reCaptcha.siteKey});
}

function emailUsed(req, res, next){
    var email = req.params.email;
    var collection = config.env.app.db.collection(config.env.collections.users);
    var filter = {
       emails :{$elemMatch:{ address: { $regex: email, $options: "i" }}}
    };
    
    collection.count(filter, function(error, count){
        res.json({used: count>0});
    });
}

function sendValidationEmail(user){
    var payload = {
        data: { _id: user._id },
        exp: Math.floor(Date.now() / 1000) + (60 * 60)
    };
    var options = { algorithm: config.env.jwt.algorithm };
    var token = jwt.sign(payload, config.env.jwt.cert.private, options );
    
    var url = config.env.email.verification.protocol+'://'+
              config.env.email.verification.host+':'+
              config.env.email.verification.port+
              config.env.email.verification.service+token;
    var link = '<a href="'+url+'">'+url+'</a>';
    var message = {
        from: config.env.email.verification.from,
        to: user.emails[0].address,
        subject: 'Account Creation E-Mail Verification',
        html:'<h1>Account Verification</h1><p/>'+link
    };

    var transporter = nodemailer.createTransport(config.env.email.smtp);
    transporter.verify(function(error, success){
        if(error){
            config.env.logger.error(error);
        } else {
            config.env.logger.debug('SMTP Server: '+config.env.email.smtp.host+' is ready.');
            transporter.sendMail(message, function(error, info){
               if(error){
                   config.env.logger.error(error);
               } else {
                   config.env.logger.info('Verification email sent to:'+message.to+'. MessageId:'+info.messageId);
               }
            });
        }
    });
}

function sendValidationText(user){
    //TODO: Send validaion text with random code;
}

function validateEmail(req, res, next){
    var collection = config.env.app.db.collection(config.env.collections.users);
    var token = req.params.token;
    jwt.verify(token, config.env.jwt.cert.private, function(err, decoded){
        var id = new mongodb.ObjectID(decoded.data._id);
        if(!err){
            collection.update({_id:id}, {$set:{validated:true}}, function(error, count){
                if(!error){
                    res.redirect('/dist/fndtnUserAccount');
                } else {
                    res.redirect('/');
                }
            });
        } else {
            res.redirect('/');
        }
    });
}

function saveUser(user) {
    return( new Promise((resolve, reject) => {
        
        var collection = config.env.app.db.collection(config.env.collections.users);
        //TODO: Need to turn this into a promise return.
        if( user.isValid() ){
            collection.save( user.record(), function(error, results){
                if(!error){
                    config.env.logger.debug(results.ops[0]);
                    if(config.env.email.verification.useEmail){
                        sendValidationEmail(results.ops[0]);
                    }

                    if(config.env.sms.verification.useSMS){
                        sendValidationText(results.ops[0]);
                    }
                    resolve(user);
                } else {
                    config.env.logger.error(error);
                    reject(error);
                }
            });
        } else {
            error = new Error('User is invalid');
            error.name = 'app-1000';
            config.env.logger.error(error);
            reject(error);
        }
    }));
}

function registerUser(req, res, next){
    var user = new User();
    user.setFirst(req.body.first || '');
    user.setMiddle(req.body.middle || '');
    user.setLast(req.body.last || '');
    user.setUsername(req.body.username || '');
    user.setPassword(req.body.password || '');
    user.addEmail({label: 'Default', address: req.body.email});
    user.addPhone({label: 'Default', phone: req.body.phone});
    
    axios.post(
        config.env.reCaptcha.verifyURL+
        '?secret=' + config.env.reCaptcha.secretKey +
        '&response=' + req.body.captcha +
        '&remoteip=' + (req.headers['x-forward-for'] || req.connection.remoteAddress))
    .then((response) => {
        if(response.data.success){
            saveUser(user).then(
            (user) => {
                res.json({redirect:'/dist/#/authenticate'});
            }).catch((error) => {
                res.json(error);
            });
        } else {
            response.data['error-codes'].forEach((error) => {
                config.env.logger.warn(error);
            });
            res.json(new Error('Did not pass robot validation'));
        }
    })
    .catch((error) => {
        config.env.logger.error(error);
    });
};

router.get('/available/:username', availableUsername);
router.get('/emailUsed/:email', emailUsed);
router.post('/register/user', registerUser);
router.get('/verify/user/:token', validateEmail);

module.exports = router;
