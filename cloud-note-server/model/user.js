const mongoose = require('mongoose')

const user = new mongoose.Schema({
    avatar: String,
    username: String,
    email: {
        type: String,
        unique: true,
        require: true
    },
    password: String,
    desc: String
},{versionKey: false, timestamps: { createdAt: 'createTime',
    updatedAt: 'updateTime'}})

module.exports = mongoose.model('user', user)