var config = require('../../../../modules/config');

var express = require('express');
var mongodb = require('mongodb');
var router = express.Router();
var PythonShell = require('python-shell');


function portfolioOptimization(req, res, next) {
    var param1 = req.params.funds;
    var param2 = req.params.withFees;
    var coinList = req.body.coinList;
	var options = {
	  mode: 'text',
	  pythonPath: '/usr/bin/python',
	  pythonOptions: ['-u'],
	  scriptPath: '/Users/hmulchandani/Documents/CryptoCurrencyAnalysisApp/CrytoCurrencyFndApp/routes/services/public/python',
	  args: [param1, param2, coinList]
	};

	var pyshell = new PythonShell('compute_input.py',options);


	PythonShell.run('bullet.py', options, function (err, data) {
	  if (err) throw err;
	  res.send(data);
	});


}




// router.post('/portfolioOptimization',portfolioOptimization);
router.post('/portfolio/:funds/:withFees',portfolioOptimization);

module.exports = router;


