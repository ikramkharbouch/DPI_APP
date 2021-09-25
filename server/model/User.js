const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    repeatPassword: {
        type: String,
        required: true
    }
})


module.exports = mongoose.module('User', UserSchema)