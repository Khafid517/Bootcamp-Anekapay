var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
	title: String,
	author: String,
	penerbit: String,
	tahun: Number,
	halaman: Number,
});

module.exports = mongoose.model('Book', BookSchema);