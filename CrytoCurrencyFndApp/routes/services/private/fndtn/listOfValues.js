var config = require('../../../modules/config');

var express = require('express');
var router = express.Router();

////////////////////////////////////////////////////////////////////////////////
//
// Defining the help object for a rest service to be able to be able to render 
// the help page.
//
////////////////////////////////////////////////////////////////////////////////
var services = services || {};
services.listOfValues = {};
services.listOfValues.serviceName = 'List Of Values';
services.listOfValues.description = 'This service is used to save and retreave defined lists of values';
services.listOfValues.serviceList = [];


//Get all items for the collection
router.get('/', function(req, res, next){
    var collection = config.env.app.db.collection(config.env.collections.lov);
    
    collection.find({}).toArray(function( error, results ){
        if(error){
            res.json(error);
        } else {
            res.json(results);
        }
    });
});

//Get a document with :id
router.get('/:id', function(req, res, next){
    var id = req.params.id;
    var collection = config.env.app.db.collection(config.env.collections.lov);
    
    collection.findOne({_id:id}, function( error, results ){
        if(error){
            res.json(error);
        }else{
            res.json(results);
        }
    });
});

//create a new document.
router.post('/', function(req, res, next) {
    var collection = config.env.app.db.collection(config.env.collections.lov);
    
    var lov = req.body;
    collection.insert(lov,function(error, results){
        if(error){
            res.json(error);
        }else{
            res.json(results);
        }
    });
});

//Update a document with :id
router.put('/:id', function(req, res, next){
    var collection = config.env.app.db.collection(config.env.collections.lov);
    
    var lov = req.body;
    collection.save(lov, function(error, results){
        if(error){
            res.json(error);
        }else{
            res.json(results);
        }
    });
});

//Delete a document with :id
router.delete('/:id', function(req, res, next){
    var collection = config.env.app.db.collection(config.env.collections.lov);
    var id = req.params.id;
    collection.deleteOne({_id:id}, {safe:true}, function(error, results){
        if(error){
            res.json(error);
        }else{
            res.json(results);
        }
    });
});

module.exports = router;
