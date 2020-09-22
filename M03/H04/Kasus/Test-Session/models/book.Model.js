var Book = require('../db/book.Schema');

module.exports = {
    findBooks: (CallBack)=>{
        Book.find()
            .then((books)=>{
                if(books){
                    return CallBack(books, false)
                }else{
                    return CallBack(null, true)
                }
            })
    },
    createBook: (data, CallBack)=>{
        const newBook = new Book (data)
        newBook.save()
            .then((book, err)=>{
                if(err){
                    return CallBack(true)
                }else{
                    return CallBack(false)
                }
            })
    },
    findBook: (data, CallBack)=>{
        Book.findOne({_id : data})
            .then((book)=>{
                if(book){
                    return CallBack(book, false)
                }else{
                    return CallBack(null, true)
                }
            })
    },
    editBook: (data, CallBack)=>{
        Book.findOneAndUpdate({
            _id: data._id
            },{
                $set: {
                    title : data.title,
                    author : data.author,
                    penerbit : data.penerbit,
                    tahun : data.tahun,
                    halaman : data.halaman,
                    jumlah : data.jumlah,
                    harga : data.harga,
                    added_at : data.added_at,
                    updated_at : Date.now()
                }
            })
            .then((book, err)=>{
                if(err){
                    return CallBack(true)
                }else{
                    return CallBack(false)
                }
            })
    },
    editCountBook: (data, CallBack)=>{
        Book.findOneAndUpdate({
            _id: data._id
            },{
                $set: {
                    jumlah : data.jumlah
                }
            })
            .then((book, err)=>{
                if(err){
                    return CallBack(true)
                }else{
                    return CallBack(false)
                }
            })
    },
    removeBook: (data, CallBack)=>{
        console.log(data)
        Book.findByIdAndDelete({_id: data})
            .then((err)=>{
                if(err){
                    return CallBack(false)
                }else{
                    return CallBack(true)
                }
            })
    }
}