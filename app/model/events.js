var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Event = new Schema({
    description: {
	type: String,
	required: true
    },
    event_date_occur: {
	type: Date,
	required: true
    },
    event_date_added: {
	type: Date,
	required: true
    },
    content: {
	type: String,
	required: true
    }

});


module.exports = mongoose.model('Event', Event);
