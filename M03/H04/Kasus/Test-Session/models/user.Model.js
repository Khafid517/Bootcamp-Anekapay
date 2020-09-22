const User = require('../db/user.Schema');

module.exports = {
    getUserByEmail: (data, CallBack)=>{
        User.findOne({email : data})
            .then((user)=>{
                if(user){
                    return CallBack(true)
                }else{
                    return CallBack(false)
                }
            })
    },
    getUser: (data, CallBack)=>{
        User.findOne({email : data.email})
            .then((user)=>{
                if(user){
                    return CallBack(user, true)
                }else{
                    return CallBack(null, false)
                }
            })
    },
    getAllUsers: (CallBack)=>{
        User.find()
            .then((user)=>{
                if(user){
                    return CallBack(user, false)
                }else{
                    return CallBack(null, true)
                }
            })
    },
    createUser: (data, CallBack)=>{
        const newUser = new User ({
            name : data.name,
            email : data.email,
            password : data.password,
            level : data.level
        })
        newUser.save()
            .then((user, err)=>{
                if(err){
                    return CallBack(true)
                }else{
                    return CallBack(false)
                }
            })
    },
    removeUser: (data, CallBack)=>{
        console.log(data)
        User.findByIdAndDelete({_id: data})
            .then((err)=>{
                if(err){
                    return CallBack(false)
                }else{
                    return CallBack(true)
                }
            })
    }
}