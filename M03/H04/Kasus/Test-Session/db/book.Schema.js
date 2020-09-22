var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	author: {
		type: String,
		required: true
	},
	penerbit: {
		type: String,
		required: true
	},
	tahun: {
		type: Number,
		required: true
	},
	halaman: {
		type: Number,
		required: true
	},
	jumlah: {
		type: Number,
		required: true
	},
	harga: {
		type: Number,
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

module.exports = mongoose.model('books', BookSchema);