var config = require('../../../../modules/config');

var jwt = require('jsonwebtoken');
var express = require('express');
var router = express.Router();

/* GET home page. */
function authenticate(req, res, next) {
    var collection = config.env.app.db.collection(config.env.collections.users);
    
    var filter = {
       "account.password" : req.body.password,
        $or : [{
            "account.username" :{ $regex: req.body.username, $options: "i" }
        }, {
            emails :{$elemMatch:{ address: { $regex: req.body.username, $options: "i" }}}
        }]
    };
    
    var fields = {
        fields: {
            "account.password":0
        }
    };

    collection.findOne( filter, fields, function(error, user){
        if(error){
            res.json(error);
        } else if ( user ){
            var expires = Math.floor(Date.now() / 1000) + (60 * 60);
            var payload = {
                data: { username: user.username, _id: user._id.toString() },
                exp: expires
            };
            var options = { algorithm: config.env.jwt.algorithm };
            
            var token = jwt.sign(payload, config.env.jwt.cert.private, options ); 
            var response = {
                token: token,
                user: user,
                redirect: '#accountForm'
            };
            
            res.cookie(
                "authenticationToken", 
                token, 
                {expires: 0});
            res.json(response);
        } else {
            res.json( new Error( 'Invalid Username or Password Please Try again' ) );
        } 
    });
};

function verify(req, res, next){
    jwt.verify(req.cookies.authenticationToken, config.env.jwt.cert.private, function(err, decoded){
        res.json({valid: err ? false : true });
    });
};

function getPublicKey( req, res, next ){
    res.json({
       publicCert: config.env.jwt.cert.public 
    });
};

router.post('/', authenticate);
router.get('/verify', verify);
router.get('/getPublicKey', getPublicKey);

module.exports = router;
