var {
    getUserByEmail,
    getUser
} = require('../models/user.Model');

module.exports = {
    checkSessionHome : (req, res, next)=>{
        var sess = req.session

        if(sess.login == undefined){
            res.write('<h1>Please login first.</h1>');
            res.end('<a href='+'/login'+'>Login</a>');
        }else{
            next();
        }
    }, 
    checkSessionLogin : (req, res, next)=>{
        var sess = req.session

        if(sess.login == true){
            res.write('<h1>You have logged in</h1>');
            res.end('<a href='+'/home'+'>Home</a>');
        }else{
            next();
        }
    }, 
    checkSessionLevelUser : (req, res, next)=>{
        var sess = req.session

        if(sess.level == 'Admin'){
            res.write('<h1>Anda bukan User</h1>');
            res.end('<a href='+'/homeAdmin'+'>Home</a>');
        }else{
            next();
        }
    }, 
    checkSessionLevelAdmin : (req, res, next)=>{
        var sess = req.session

        if(sess.level == 'User'){
            res.write('<h1>Anda bukan Admin</h1>');
            res.end('<a href='+'/home'+'>Home</a>');
        }else{
            next();
        }
    }, 
    checkUser : (data, next)=>{
        var email = data.email;
        getUserByEmail(email, (result)=>{
            next(result)
        })
    },
    checkUserLogin : (data, next)=>{
        getUser(data, (user, result)=>{
            next(user, result)
        })
    }
}