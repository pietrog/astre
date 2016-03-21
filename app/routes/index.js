var express = require('express');
var router = express.Router();
var app = require('../../app.js');
var jwt = require('jsonwebtoken');
var httphandler = require('../httpHandler.js');
var Event = require('../model/events');

/* GET home page. */
/*router.get('*', function(req, res) {
    res.sendFile('/home/pietro/projects/webApp/angularClient/app/index.html');
});*/

//authenticate a user
router.post('/authenticate', function(req, res){

    //httphandler.answerJSonWithHTTPCode(res, 401, 'Utilisateur  inexistant');
    if (req.body.name == "admin" && req.body.password == "astre2016"){
	var token = jwt.sign({name: "admin"}, 'superSecret', { expiresIn : 10000 });
	console.log("CONNEXION " + req.body.name);
	httphandler.answerJSonSuccess(res, { success : true,
					     data : "Authentication successed ! ",
					     token: token
					   });
    }
    else
	httphandler.answerJSonWithHTTPCode(res, 401, 'Utilisateur inexistant');
});

router.get('/events', function(req, res){
    Event.find(function(err, events){
	if (err)
	    httphandler.answerJSonFailure(res, err.toString());
	else
	    httphandler.answerJSonSuccess(res, events);
    });
});

module.exports = router;
