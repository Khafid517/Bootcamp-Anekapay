var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	level: {
		type: String,
		required: true
	},
	added_at: {
		type: Date,
		default: Date.now
	},
	update_at: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('users', UserSchema);