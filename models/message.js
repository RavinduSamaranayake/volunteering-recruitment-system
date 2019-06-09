const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

// Schema
const MessageSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String
            // required: true
    },
    organization: {
        type: String,
        require: true


    },
    message: {
        type: String,
        required: true
    },
});

const Message = (module.exports = mongoose.model(
    "Message",
    MessageSchema
));