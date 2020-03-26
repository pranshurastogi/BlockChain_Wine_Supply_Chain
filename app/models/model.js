const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    emailId: { type: String, unique: true },
    password: String,
    role: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('user', userSchema);