var express = require('express');
var router = express.Router();
var Report = require('../model/report.js');
var httphandler = require('../httpHandler.js');
var Event = require('../model/events');

router.get('/all', function(req, res){
    var query = Report.find();
    query.sort({ report_date: -1 });
    query.exec(function(err, cptsrendus){
	if (err)
	    httphandler.answerJSonFailure(res, err.toString());	
	else{
	    httphandler.answerJSonSuccess(res, cptsrendus);
	}
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
router.post('/createReport', function(req, res){
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

/**
  * Create a new cpt rendu
  */
router.post('/createEvent', function(req, res){
    var event = new Event({
	description: req.body.description,
	event_date_occur: req.body.date_occur,
	event_date_added: new Date(),
	content: req.body.content
    });

    event.save(function(err, cpt, nbAffected){
	if (err)
	    httphandler.answerJSonFailure(res, err.toString());
	else
	    httphandler.answerJSonSuccess(res, "Evenement sauvegardé");

    });

});


router.delete('/delreport/:reportid', function(req, res){
    Report.remove({ _id: req.params.reportid }, function(err, obj){
	if (err)
	    httpHandler.answerJSonFailure(res, err.toString());
	else{
	    var query = Report.find();
	    query.sort({ report_date: -1 });
	    query.exec(function(err, cptsrendus){
		httphandler.answerJSonSuccess(res, cptsrendus);
	    
	    })
	}	      
    });
});

router.delete('/delevent/:eventid', function(req, res){
    Event.remove({ _id: req.params.eventid }, function(err, obj){
	if (err)
	    httpHandler.answerJSonFailure(res, err.toString());
	else{
	    var query = Event.find();
	    query.sort({ event_date_occur: -1 });
	    query.exec(function(err, events){
		httphandler.answerJSonSuccess(res, events);
	    
	    })
	}	      
    });
});


module.exports = router;
