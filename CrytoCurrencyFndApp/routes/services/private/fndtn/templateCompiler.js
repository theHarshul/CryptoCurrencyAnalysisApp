var config = require('../../../modules/config');
var express = require('express');
var router = express.Router();

var templateCompiler = require(config.env.path.templateCompiler);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('private/fndtn/templateCompiler', { title: 'Template Compiler' });
});

router.post('/run', function(req, res, next) {
    templateCompiler();
    res.render('private/fndtn/templateCompiler', { title: 'Template Compiler', status:'Success' });
});

module.exports = router;
