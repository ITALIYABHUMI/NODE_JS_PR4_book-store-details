const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    page: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
})

const admin = mongoose.model('admin', adminSchema);
module.exports = admin;                                                                                                 