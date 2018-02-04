var config = require('../../../../modules/config');

var express = require('express');
var mongodb = require('mongodb');
var router = express.Router();

var spawn = require("child_process").spawn;

function portfolioOptimization(req, res, next) {
	// var currencyList = req.body.currencyList;
	var py = spawn('python',["compute_input.py"]);
	var data = [1,2,3];
	dataString = "";

	py.stdout.on('data', function(data){
  		dataString += data.toString();
  		res.json(data);
	});
	py.stdout.on('end', function(){
	  console.log('Sum of numbers=',dataString);
	});
	py.stdin.write(JSON.stringify(data));
	py.stdin.end();
}




// router.post('/portfolioOptimization',portfolioOptimization);
router.get('/portfolioOptimization',portfolioOptimization);

module.exports = router;


