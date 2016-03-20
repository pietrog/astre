var express = require('express');
var router = express.Router();
var User = require('../model/users.js');
var Report = require('../model/report.js');
var httphandler = require('../httpHandler.js');


router.get('/all', function(req, res){
    Report.find(function(err, cptsrendus){
	if (err)
	    httphandler.answerJSonFailure(res, err.toString());	
	else
	    httphandler.answerJSonSuccess(res, cptsrendus);
    });
});


router.get('/show/:id', function(req, res){
    Report.findOne(
	{ _id: req.params.id},
	function(err, cptsrendus){
	if (err)
	    httphandler.answerJSonFailure(res, err.toString());	
	else
	    httphandler.answerJSonSuccess(res, cptsrendus);
    });
});

/**
  * Create a new cpt rendu
  */
router.post('/create', function(req, res){
    var cpt = new Report({
	description: req.body.description,
	report_date: req.body.date,
	content: req.body.content
    });
    console.log("la: " + req.body);
    cpt.save(function(err, cpt, nbAffected){
	if (err)
	    httphandler.answerJSonFailure(res, err.toString());
	else
	    httphandler.answerJSonSuccess(res, "ddddddd");

    });

});


module.exports = router;
