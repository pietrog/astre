var express = require('express');
var router = express.Router();
var User = require('../model/users.js');
var app = require('../../app.js');
var jwt = require('jsonwebtoken');

/* GET home page. */
/*router.get('*', function(req, res) {
    res.sendFile('/home/pietro/projects/webApp/angularClient/app/index.html');
});*/

//authenticate a user
router.post('/authenticate', function(req, res){
    User.findOne({
	name : req.body.name
    }, function(err, user){
	if (err) throw err;

	if (!user){
	    res.json({ success : false, message: 'User ' + req.body.name + ' not found !!'});
	}
	else{
	    if (user.password != req.body.password){
		
		res.status(401).json({ success : false, message: 'Authentication failed. Wrong password !' });
	    }
	    else{
		var profil = {
		    user: user.name,
		    email: "coucou@ili.ki",
		    id: user.id
		};

		var token = jwt.sign(profil, App.app.get('superSecret'), { expiresInMinutes : 5 });
		
		res.json({ success : true, message : "Authentication successed ! ", token: token, access: {}});
	    }
	}
    })
});


module.exports = router;
