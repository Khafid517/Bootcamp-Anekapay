
const mongoose = require('mongoose')

// User Schema
const UserSchema = mongoose.Schema({
    name: { 
        type: String 
    },
    gender: {
        type: String
    },
    age: {
        type: Number
    }
})

module.exports = mongoose.model('users', UserSchema)