var config = require('../../../../modules/config');
var applicationErrorHandler = require('../../../../modules/applicationErrorHandler');
var User = require('../../../../models/User');

var express = require('express');
var mongodb = require('mongodb');
var router = express.Router();
var jwt = require('jsonwebtoken');

function saveUser(req, res, next) {
    var user = new User();
    user.setUser(req.body);
    var _id = new mongodb.ObjectId(req.params.id);
    if(_id === user._id){
        var collection = config.env.app.db.collection(config.env.collections.users);

        if( user.isValid() ){
            collection.save( user.toJSON(), function(err, user){
                if(err){
                    var error = applicationErrorHandler.getError('app',1004);
                    config.env.logger.error(error);
                    config.env.logger.error(err);
                    config.env.logger.error(user);
                    res.json(error);
                } else {
                    res.json( user );
                }
            });
        } else {
            var error = applicationErrorHandler.getError('app',1003);
            config.env.logger.warn(error);
            res.json(error);
        }
    } else {
        var error = applicationErrorHandler.getError('app',1005);
        config.env.logger.warn(error);
        res.json(error);
    }
}

function getUserMenus(req, res, next){
    
}

function loadUser( req, res, next ){
    var collection = config.env.app.db.collection(config.env.collections.users);
    jwt.verify(req.cookies.authenticationToken, config.env.jwt.cert.private, function(error, decoded){
        if(!error){
            collection.findOne({ _id: new mongodb.ObjectId(decoded.data._id) }, function(err, user){
               if(err){
                    var error = applicationErrorHandler.getError('app',1006);
                    config.env.logger.error(error);
                    config.env.logger.error(err);
                    config.env.logger.error({_id:decoded.data._id});
                    res.json(error);
               } else {
                   res.json({user: user});
               }
            });
        }
    });
}

router.get('/', loadUser );
router.get('/userMenu/:userId', getUserMenus);
router.post( '/:id', saveUser );
router.put( '/:id', saveUser );

module.exports = router;
