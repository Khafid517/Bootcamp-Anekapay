var express = require('express');
var Book = require('../models/book');
var router = express.Router();

router.get('/', function(req, res){
    console.log('getting all books');
    Book.find(function(err, books){
        if(err) {
            res.send('error has occured');
        } else {
            res.render('index', { books: books });
        }
    });
});

router.get('/formUpdate/:id', function(req, res){
    Book.findOne({
        _id: req.params.id
    }, function(err, book){
        console.log(book)
        res.render('formUpdate', { books : book});
    });
});

router.get('/add', function (req, res) {
    res.render('formAdd', { message : null});
});

router.post('/add', function(req, res){
    var newBook = new Book();
    newBook.title = req.body.title;
    newBook.author = req.body.author;
    newBook.penerbit = req.body.penerbit;
    newBook.tahun = req.body.tahun;
    newBook.halaman = req.body.halaman;
    newBook.save(function(err){
        if(err) {
            res.render('formAdd', { message: "not succes"})
        } else {
            res.redirect('/books/');
        }
    });
});

router.post('/update', function(req, res){
    Book.findOneAndUpdate({
        _id: req.body._id
    },{
        $set: {
            title : req.body.title,
            author : req.body.author,
            penerbit : req.body.penerbit,
            tahun : req.body.tahun,
            halaman : req.body.halaman
        }
    },function(err){
        if(err) {
            res.send('error updating book');
        } else {
            res.redirect('/books/');
        }
    });
});

router.get('/delete/:id', function(req, res){
    Book.findByIdAndDelete({
        _id: req.params.id
    },function(err, book){
        if(err) {
            res.send('error deleting book');
        } else {
            res.redirect('/books/')
        }
    });
});

module.exports = router;