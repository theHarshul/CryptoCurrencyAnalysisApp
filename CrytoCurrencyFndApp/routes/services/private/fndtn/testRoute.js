var config = require('../../../../modules/config');

var express = require('express');
var mongodb = require('mongodb');
var router = express.Router();

function findRecords(req, res, next) {
    res.send('findRecords in '+req.params.collection);
};

function findRecord(req, res, next) {
    res.send('findRecord id='+req.params.id+' in '+req.params.collection);
};

function saveRecord(req, res, next) {
    var Record = require('../../../../models/'+req.params.collection);
    res.send('saveRecord in '+req.params.collection);
};

function deleteRecord(req, res, next) {
    var collectionName = req.params.collection;
    var id = req.params.id;
    res.send('deleteRecord id='+id+' in collection '+collectionName);
};

router.post('/find/:collection', findRecords);
router.get('/:collection/:id', findRecord);
router.post('/:collection', saveRecord);
router.put('/:collection', saveRecord);
router.delete('/:collection/:id', deleteRecord);

module.exports = router;
