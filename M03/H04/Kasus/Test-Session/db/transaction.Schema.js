var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TransactionScema = new Schema({
	buyer: {
		type: Schema.Types.ObjectId,
        ref: "users"
	},
	total: {
		type: Number
	},
	added_at: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('transactions', TransactionScema);