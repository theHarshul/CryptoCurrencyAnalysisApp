var config = require('../../../modules/config');

var express = require('express');
var router = express.Router();
var fs = require('fs');

function listPath(req, res, next){
    var path = './' + (req.params.path ? req.params.path.replace(/\./g,'/') : '');
    var list = {};
    fs.readdirSync(path).forEach((name) => {
        if(fs.statSync(path+"/"+name).isDirectory()){
            list[name] = {isDirectory:true, children:{}};
        } else {
            if(name.endsWith('.js')){
                list[name] = {path:path+'/'+name, url:path.substr(1)+'/'+name.substr(0,name.length-3)};
            }
        }
    });
    res.json(list);
}

router.get('/listDirectory', listPath);
router.get('/listDirectory/:path', listPath);

module.exports = router;

