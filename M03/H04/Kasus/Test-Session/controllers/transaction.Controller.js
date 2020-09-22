const {
    getTransactionByIdUser,
    getTransaction,
    addTransaction
} = require('../models/transaction.Model');

const {
    getUser
} = require('../models/user.Model');

const {
    findBook,
    editCountBook
} = require('../models/book.Model');

module.exports = {
    getHistoryUser: (req, res)=>{
        const sess = req.session

        getUser(sess, (user, err)=>{
            if(!err) {
                res.send('error')
            } else {
                getTransactionByIdUser(user._id, (history, err)=>{
                    if(err) {
                        res.render('transactions/historyUser', { data : history});
                    } else {
                        res.render('transactions/historyUser', { data : history});
                    }
                })
            }
        })
    },
    addHistoryUser: (req, res)=>{
        const sess = req.session

        const body = req.body

        let total = parseInt(body.total)
        let newTransaction = {
            buyer : sess._id,
            total : total
        }
        
        addTransaction(newTransaction, function(err){})

        let cart = sess.cart

        if(cart){
            for(const element of cart){
                let _id = element._id

                findBook(_id, (book)=>{

                    let newJumlah = book.jumlah - element.jumlah
                    let data = {
                        _id : _id,
                        jumlah : newJumlah
                    }

                    editCountBook(data, function(err){})
                })
            }
            sess.cart = []
            res.redirect("history")
        }
        // getUser(sess, (user, err)=>{
        //     let total = parseInt(body.total)
        //     const newTransaction = {
        //         buyer : user._id,
        //         total : total
        //     }
        //     addTransaction(newTransaction, ()=>{
        //         let cart = sess.cart

        //         for(let i = 0; i < cart.length; i++){
        //             let _id = cart[i]._id

        //             findBook(_id, (book)=>{
        //                 let app = sess.cart

        //                 let newJumlah = book.jumlah - app[i].jumlah
        //                 let data = {
        //                     _id : _id,
        //                     jumlah : newJumlah
        //                 }

        //                 editCountBook(data, (err)=>{
        //                     if(err){
        //                         console.log(err)
        //                     }else{
        //                         console.log("suskses")
        //                     }
        //                 })
        //             })
        //         }
        //         console.log("maipan")
        //     })
        // })
    },
    getHistory: (req, res)=>{
        getTransaction((history, err)=>{
            if(err) {
                res.render('transactions/historyAdmin', { data : history});
            } else {
                res.render('transactions/historyAdmin', { data : history});
            }
        })
    },
}