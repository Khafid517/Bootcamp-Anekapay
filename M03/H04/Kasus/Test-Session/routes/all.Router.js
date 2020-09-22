const {
    checkSessionHome,
    checkSessionLogin,
    checkSessionLevelAdmin,
    checkSessionLevelUser
} = require('../auth/basic.Auth');

const {
    formRegisterUser,
    registerUser,
    formLoginUser,
    loginUser,
    dashboardUser,
    profileUser,
    dashboardAdmin,
    loguot,
    getUsers,
    deleteUser
} = require('../controllers/user.Controller');

const {
    getBooks,
    formAddBook,
    addBook,
    formUpdateBook,
    updateBook,
    deleteBook
} = require('../controllers/book.Controller');

const {
    fromAddCart,
    addCart,
    listCart,
    updateCartMinus,
    updateCartPlus,
    deleteCart
} = require('../controllers/cart.Controller');

const {
    getHistory,
    getHistoryUser,
    addHistoryUser,
    destCart
} = require('../controllers/transaction.Controller');

var express = require('express');
var router = express.Router();

router.get('/register', formRegisterUser);
router.post('/register', registerUser);

router.get('/login', checkSessionLogin, formLoginUser);
router.post('/login', loginUser);

// 4 User
router.get('/home', checkSessionHome, checkSessionLevelUser, dashboardUser)
router.get('/profile', checkSessionHome, checkSessionLevelUser, profileUser)
router.get('/home/books', checkSessionHome, checkSessionLevelUser, getBooks)

// Cart
router.get('/home/books/:id', checkSessionHome, checkSessionLevelUser, fromAddCart)
router.post('/home/books/addCart', checkSessionHome, checkSessionLevelUser, addCart)
router.get('/home/listCart', checkSessionHome, checkSessionLevelUser, listCart)
router.get('/home/listCart/deleteCart/:id', checkSessionHome, checkSessionLevelUser, deleteCart)
router.get('/home/listCart/updateMinus/:id', checkSessionHome, checkSessionLevelUser, updateCartMinus)
router.get('/home/listCart/updatePlus/:id', checkSessionHome, checkSessionLevelUser, updateCartPlus)

// Transaction
router.post('/home/checkout', checkSessionHome, checkSessionLevelUser, addHistoryUser)
router.get('/home/history', checkSessionHome, checkSessionLevelUser, getHistoryUser)

router.get('/logout', loguot)

// 4 Admin
router.get('/homeAdmin', checkSessionHome, checkSessionLevelAdmin, dashboardAdmin)

// Book
router.get('/homeAdmin/books', checkSessionHome, checkSessionLevelAdmin, getBooks)
router.get('/homeAdmin/addBook', checkSessionHome, checkSessionLevelAdmin, formAddBook)
router.post('/homeAdmin/addBook', checkSessionHome, checkSessionLevelAdmin, addBook)

router.get('/homeAdmin/updateBook/:id', checkSessionHome, checkSessionLevelAdmin, formUpdateBook)
router.post('/homeAdmin/updateBook', checkSessionHome, checkSessionLevelAdmin, updateBook)

router.get('/homeAdmin/deleteBook/:id', checkSessionHome, checkSessionLevelAdmin, deleteBook)

// History
router.get('/homeAdmin/history', checkSessionHome, checkSessionLevelAdmin, getHistory)


//User
router.get('/homeAdmin/users', checkSessionHome, checkSessionLevelAdmin, getUsers)

router.get('/homeAdmin/deleteUser/:id', checkSessionHome, checkSessionLevelAdmin, deleteUser)


module.exports = router;