var config = require('../../../../modules/config');

var express = require('express');
var mongodb = require('mongodb');
var router = express.Router();
var PythonShell = require('python-shell');


function portfolioOptimization(req, res, next) {

	var options = {
	  mode: 'text',
	  pythonPath: '/usr/bin/python',
	  pythonOptions: ['-u'],
	  scriptPath: '/Users/hmulchandani/Documents/CryptoCurrencyAnalysisApp/CrytoCurrencyFndApp/routes/services/public/python',
	  args: ['value1', 'value2', 'value3']
	};

	var pyshell = new PythonShell('compute_input.py',options);


	PythonShell.run('compute_input.py', options, function (err, data) {
	  if (err) throw err;
	  res.send(data);
	});


}




// router.post('/portfolioOptimization',portfolioOptimization);
router.get('/portfolioOptimization',portfolioOptimization);

module.exports = router;


