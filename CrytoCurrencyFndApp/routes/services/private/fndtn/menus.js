var config = require('../../../../modules/config');

var express = require('express');
var mongodb = require('mongodb');
var router = express.Router();

function findRecords(req, res, next) {
    var collection = config.env.app.db.collection(config.env.collections.menus);
    var query = {};
    if(req.body.name){
        query.file={$regex: ".*"+req.body.name+".*", $options:"i"};
    }
    
    collection.find(query).sort({name:1}).toArray(function(error, menus){
       if(error){
           res.json({menu: []});
       } else {
           res.json({menus: menus});
       }
    });
};

function saveRecord(req, res, next) {
    var collection = config.env.app.db.collection(config.env.collections.menus);
    var menu = {};
    if( req.body._id !== '' ){ 
        menu._id = new mongodb.ObjectId(req.body._id);
    };
    
    menu.display = req.body.display;
    menu.menuType = req.body.menuType;
    menu.resourceURL = req.body.resourceURL;
    
    collection.save(menu,function(error, menu){
        if(error){
            res.json(error);
        } else {
            res.json(menu);
        }
    });
};

function deleteRecord(req, res, next) {
    var collection = config.env.app.db.collection(config.env.collections.menus);
    collection.deleteOne({_id: new mongodb.ObjectId(req.params.menuId)}, function(error, result){
        if(error){
            res.json(error);
        }else{
            res.json(result);
        }
    });
   
};

router.post('/find', findRecords);
//router.get('/:id', findRecord);
router.post('/', saveRecord);
router.put('/', saveRecord);
router.delete('/:menuId', deleteRecord);

module.exports = router;
