var {
    findBooks,
    createBook,
    findBook,
    editBook,
    removeBook
} = require('../models/book.Model');

module.exports = {
    getBooks : (req, res)=>{
        var sess = req.session
        findBooks((books, err)=>{
            if(err){
                res.end('<h1>Eror get book</h1>');
            }else{
                if(sess.level == "Admin"){
                    res.render('books/tableBookAdmin', {data : books})
                }else{
                    res.render('books/tableBookUser', {data : books})
                }
            }
        })
    },
    formAddBook : (req, res)=>{
        res.render('books/formAddBook', { message : null});
    },
    addBook : (req, res)=>{
        let body = req.body

        var newBook = {
            title : body.title,
            author : body.author,
            penerbit : body.penerbit,
            tahun : body.tahun,
            halaman : body.halaman,
            jumlah : body.jumlah,
            harga : body.harga,
            created_at : Date.now(),
            updated_at : Date.now()
        };
        
        createBook(newBook, (err)=>{
            if(err) {
                res.render('books/formAddBook', { message: "not succes"})
            } else {
                res.redirect('books');
            }
        })
    },
    formUpdateBook : (req, res)=>{
        var id = req.params.id

        findBook(id, (book, err)=>{
            if(err) {
                res.send('error')
            } else {
                res.render('books/formUpdateBook', { books : book});
            }
        })
    },
    updateBook : (req, res)=>{
        let body = req.body

        var book = {
            _id : body._id,
            title : body.title,
            author : body.author,
            penerbit : body.penerbit,
            tahun : body.tahun,
            halaman : body.halaman,
            jumlah : body.jumlah,
            harga : body.harga,
            created_at : body.added_at,
            updated_at : Date.now()
        };
        
        editBook(book, (err)=>{
            if(err) {
                res.render('books/formUpdateBook', { message: "not succes"})
            } else {
                res.redirect('/homeAdmin/books');
            }
        })
    },
    deleteBook : (req, res)=>{
        var id = req.params.id
        console.log(id)

        removeBook(id, (err)=>{
            if(err) {
                res.send('error deleting book');
            } else {
                res.redirect('/homeAdmin/books')
            }
        })
    }
}