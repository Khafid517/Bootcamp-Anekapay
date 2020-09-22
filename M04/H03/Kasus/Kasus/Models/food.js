var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FoodSchema = new Schema({
	food_name: {
		type: String,
		required: true
	},
	desc: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('foods', FoodSchema);