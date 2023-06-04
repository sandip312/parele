const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
       email: {
        type: String,
        required: true

    },
    phoneNumber: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: '',
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;

