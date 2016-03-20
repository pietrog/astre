var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Report = new Schema({
    description: {
	type: String,
	required: true
    },
    report_date: {
	type: Date,
	required: true
    },
    content: {
	type: String,
	required: true
    }
});


module.exports = mongoose.model('Report', Report);
