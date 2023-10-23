const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const usersSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: uuidv4
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        default: 'guest'
    }
});

const Users = mongoose.model('Users', usersSchema);

module.exports = Users;
