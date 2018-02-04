var config = require('../../../../modules/config');

var express = require('express');
var mongodb = require('mongodb');
var router = express.Router();

function findUsers( req, res, next ){
    var collection = config.env.app.db.collection(config.env.collections.users);
    
    var query = {};
    
    fields = {
        "account.password":0
    };
    
    collection.find(query, fields).toArray(function(error, users){
       if(error){
           config.env.logger.error(error);
           res.json({users: []});
       } else {
           res.json({users: users});
       }
    });
}

function saveUser(req, res, next) {
    var user = new User();
    user.setUser(req.body);
    var collection = config.env.app.db.collection(config.env.collections.users);

    if( user.isValid() ){
        collection.save( user.toJSON(), function(error, user){
            if(error){
                res.json( error );
            } else {
                res.json( user );
            }
        });
    } else {
        var error = new Error('User is invalid');
        error.name = 'app-1000';
        res.json(error);
    }
}

function deleteUser( req, res, next ){
    var collection = config.env.app.db.collection(config.env.collections.users);
    var id = new mongodb.ObjectId(req.params.id);
    
    collection.deleteOne({_id:id}, {safe:true}, function(error, results){
        if(error){
            res.json(error);
        }else{
            res.json(results);
        }
    });    
}

function loadUser( req, res, next ){
    var collection = config.env.app.db.collection(config.env.collections.users);
    var id = new mongodb.ObjectId(req.params.id);
    
    collection.findOne({ _id: id }, function(error, user){
       if(error){
           res.json(JSON.stringify(error));
       } else {
           res.json({user:user});
       }
    });
}

router.post('/find', findUsers);
router.post('/', saveUser);
router.put('/', saveUser);
router.get('/:id', loadUser);
router.delete('/:id',deleteUser);
module.exports = router;