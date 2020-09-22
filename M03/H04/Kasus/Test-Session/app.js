var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var path = require('path');
var port = 3000;
var db = 'mongodb://localhost/test_aneka';

var User = require('./routes/all.Router');

mongoose.connect(db);

app.use(session({
    secret: 'ssshhhhh',
    saveUninitialized: true,
    resave: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', User);

app.get('/', function(req, res){
    res.send('Test Session');
});

app.listen(port, function(){
    console.log('app listening on port: '+port);
});