const {
    findBook
} = require('../models/book.Model');

module.exports = {
    fromAddCart: (req, res)=>{
        var id = req.params.id

        findBook(id, (book, err)=>{
            if(err) {
                res.send('error')
            } else {
                if(book.jumlah <= 0){
                    res.write('<h1>Buku Kosong</h1>');
                    res.end('<a href='+'../books'+'>daftar buku</a></br>');
                }else{
                    res.render('carts/fromAddCart', { books : book});
                }
            }
        })
    },
    addCart: (req, res)=>{
        const sess = req.session

        let body = req.body

        if(body.jumlah <= 0){
            res.write('<h1>Gagal menambahakn ke Cart karena jumlah pemesan Buku Kosong</h1>');
            res.end('<a href='+'../books'+'>daftar buku</a></br>');
        }else{
            if (!sess.cart) {
                sess.cart = [];
            }

            findBook(body._id, (book, err)=>{
                if(err) {
                    res.send('error')
                } else {
                    if(body.jumlah > book.jumlah){
                        res.write('<h1>Gagal menambahakn ke Cart karena jumlah pemesan Buku Melebihi Stok</h1>');
                        res.end('<a href='+'../books'+'>daftar buku</a></br>');
                    }else{
                        let jumlah = parseInt(body.jumlah)
                        sess.cart.push({
                            _id: book._id,
                            title: book.title,
                            harga: book.harga,
                            jumlah: jumlah
                        })
                        res.redirect('../listCart')
                    }
                }
            })
        }
    },
    listCart: (req, res)=>{
        const sess = req.session

        let cart = sess.cart

        let total = 0, final = 0
        if(cart){
            for (let i = 0; i < cart.length; i++) {
                var harga = cart[i].harga;
                var jumlah = cart[i].jumlah

                total = harga * jumlah

                final = total + final
            }
            res.render('carts/listCart', {cart: cart, total: final})
        }else{
            res.write('<h1>Keranjang Kosong</h1>');
            res.end('<a href='+'books'+'>daftar buku</a></br>');
        }
    },
    deleteCart: (req, res)=>{
        var _id = req.params.id

        var cart = req.session.cart.reduce((acc, array) => {
            if (array._id !== _id) {
                acc.push(array)
            } 
            return acc;
        }, [])

        req.session.cart = cart
        res.redirect('/home/listCart')
    },
    updateCartMinus: (req, res)=>{
        var _id = req.params.id

        var cart = req.session.cart.reduce((acc, array) => {
            if (array._id == _id) {
                let angka = parseInt(array.jumlah) 
                if(array.jumlah > 0){
                    angka -= 1
                    array.jumlah = angka
                }
                acc.push(array)
            }else{
                acc.push(array)
            }
            return acc;
        }, [])

        req.session.cart = cart
        res.redirect('/home/listCart')
    },
    updateCartPlus: (req, res)=>{
        var _id = req.params.id

        var cart = req.session.cart.reduce((acc, array) => {
            if (array._id == _id) {
                let angka = parseInt(array.jumlah) 
                angka += 1
                array.jumlah = angka
                acc.push(array)
            }else{
                acc.push(array)
            }
            return acc;
        }, [])

        req.session.cart = cart
        res.redirect('/home/listCart')
    }
}