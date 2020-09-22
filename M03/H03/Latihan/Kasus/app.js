var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var port = 3000;
var db = 'mongodb://localhost/test_aneka';

var books = require('./routes/books');

mongoose.connect(db);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/books', books);

app.get('/', function(req, res){
    res.send('tes express nodejs mongodb');
});

app.listen(port, function(){
    console.log('app listening on port: '+port);
});