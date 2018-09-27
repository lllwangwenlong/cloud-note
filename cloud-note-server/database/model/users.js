var mongoose = require('mongoose')

const users = new mongoose.Schema({
    username: String,
    password: String,
    email: {
        type: String,
        unique: true
    },
    avatar:String
})

module.exports = mongoose.model('users', users, 'users')