const mongoose = require('mongoose');
const validator = require('validator');
const adminSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Enter your name please'],
        maxLength:[15, 'Your name must not be exceed 15 character']
    },
    email:{
        type: String,
        reqruied: [true, 'You must have to provide a email'],
        unique: true,
        validate: [validator.isEmail, 'Please Enter valid email address']
    },
    password:{
        type: String,
        reqruied: [true,'You must provide a password'],
        minlength: [6, 'Password must be more than 5 character']
    }
})

module.exports = mongoose.model('Admin',adminSchema);