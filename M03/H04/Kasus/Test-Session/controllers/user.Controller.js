var {
    checkUser,
    checkUserLogin
} = require('../auth/basic.Auth');

var {
    createUser,
    getAllUsers,
    removeUser,
} = require('../models/user.Model');

module.exports = {
    formRegisterUser: (req, res)=>{
        res.render('formRegister')
    },
    registerUser: (req, res)=>{
        const body = req.body
        const level = 'User'

        const newUser = {
            name : body.name,
            email : body.email,
            password : body.password,
            level : level
        }

        checkUser(newUser, (result)=>{
            if(result){
                res.write('<h1>User Sudah Terdaftar</h1>');
                res.end('<a href='+'/login'+'>menuju halaman Login</a>');
            }else{
                createUser(newUser, (check)=>{
                    if(check){
                        res.write('<h1>Gagal mendaftarkan User</h1>');
                        res.end('<a href='+'/register'+'>daftar ulang</a>');
                    }else{
                        res.write('<h1>Berhasil mendaftarkan User</h1>');
                        res.end('<a href='+'/login'+'>menuju halaman Login</a>');
                    }
                })
            }
        })
    },
    formLoginUser: (req, res)=>{
        res.render('formLogin')
    },
    loginUser: (req, res)=>{
        var body = req.body

        var user = {
            email : body.email,
            password : body.password
        }
        checkUserLogin(user, (result, check)=>{
            if(!check){
                res.write('<h1>Belum Terdaftar</h1>');
                res.end('<a href='+'/register'+'>menuju registrasi</a></br><a href='+'/login'+'>atau login</a>');
            }else{
                if(result.password == user.password){
                    var sess = req.session

                    sess._id = result._id
                    sess.name = result.name
                    sess.email = result.email
                    sess.password = result.password
                    sess.level = result.level

                    sess.login = true

                    if(sess.level == 'Admin'){
                        res.redirect('/homeAdmin')
                    }else{
                        res.redirect('/home')
                    }
                }
                res.write('<h1>Password Salah</h1>');
                res.end('<a href='+'/login'+'>login ulang</a>');
            }
        })
    },
    dashboardUser: (req, res)=>{
        var sess = req.session
        res.render('homeUser', {data: sess})
    },
    profileUser: (req, res)=>{
        var sess = req.session
        res.render('profileUser', {data: sess})
    },
    loguot: (req, res)=>{
        req.session.destroy((err) => {
            if(err) {
                return console.log(err);
            }
            res.redirect('/login');
        });
    },
    dashboardAdmin: (req, res)=>{
        var sess = req.session
        res.render('homeAdmin', {data: sess})
    },
    getUsers: (req, res)=>{
        getAllUsers((users, err)=>{
            if(err) {
                res.send('error')
            } else {
                res.render('users/tableUserAdmin', { data : users});
            }
        })
    },
    deleteUser : (req, res)=>{
        var id = req.params.id

        removeUser(id, (err)=>{
            if(err) {
                res.send('error deleting user');
            } else {
                res.redirect('../users')
            }
        })
    }
}