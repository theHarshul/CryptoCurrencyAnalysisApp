var config = require('../../../../modules/config');

var express = require('express');
var mongodb = require('mongodb');
var router = express.Router();

function findByRoleId(req, res, next) {
    var collection = config.env.app.db.collection(config.env.collections.roleMenus);
    var query = {_id:mongodb.ObjectId(req.params.id)};
    
    collection.find(query).sort({name:1}).toArray(function(error, roleMenus){
       if(error){
           res.json({roleMenus: []});
       } else {
           res.json({roleMenus: roleMenus});
       }
    });
};

function saveRecord(req, res, next) {
    var collection = config.env.app.db.collection(config.env.collections.roleMenus);
    var roleMenu = {};

    roleMenu = req.body;
    
    if( req.body._id !== '' ){ 
        roleMenu._id = new mongodb.ObjectId(req.body._id);
    };
    
    collection.save(roleMenu,function(error, roleMenu){
        if(error){
            res.json(error);
        } else {
            res.json(roleMenu);
        }
    });
};

function deleteRecord(req, res, next) {
    var collection = config.env.app.db.collection(config.env.collections.roleMenus);
    collection.deleteOne({_id: new mongodb.ObjectId(req.params.id)}, function(error, result){
        if(error){
            res.json(error);
        }else{
            res.json(result);
        }
    });
   
};

router.post('/findByRoleId/:id', findByRoleId);
router.post('/', saveRecord);
router.put('/', saveRecord);
router.delete('/:id', deleteRecord);

module.exports = router;
