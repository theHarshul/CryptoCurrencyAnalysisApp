var express = require('express');
var router = express.Router();

router.get('/:name',function(req, res, next){
    var name = req.params.name;
    var db = req.db;
    var collection = db.collection('Fragments');
    
    collection.findOne({ "fragment": name}, {}, function(e,doc){
        res.send(doc.html);
    });
});

module.exports = router;