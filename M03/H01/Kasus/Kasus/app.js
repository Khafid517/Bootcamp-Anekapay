const mongoose = require('mongoose');

// Map global promise - get rid of warning
mongoose.Promise = global.Promise;
// Connect to db
const db = mongoose.connect('mongodb://localhost:27017/test_aneka', {
  useMongoClient: true
});

// Model
const Users = require('./models/users')

// Add 
const addUser = (users) => {
  Users.create(users).then(users => {
    console.info('New User Added')
    db.close()
  })
}

// Find Users
const findUser = (name) => {
  Users.find({$or: name})
    .then(users => {
      console.info(users)
      console.info(`${users.length} matches`)
      db.close()
    })
}

// Update Users
const updateUser = (_id, users) => {
  Users.update({ _id }, users)
    .then(users => {
      console.info('User Updated')
      db.close()
    })
}

// Remove Users
const removeUser = (_id) => {
  Users.remove({ _id })
    .then(users => {
      console.info('User Removed')
      db.close()
    })
}

// List Users
const listUsers = () => {
  Users.find()
    .then(users => {
      console.info(users)
      console.info(`${users.length} user`)
      db.close()
    })
}

module.exports = {
  addUser,
  findUser,
  updateUser,
  removeUser,
  listUsers
}