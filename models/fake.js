const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
    couple: String,
    adopted: Array,
    user: String,
    user2: String,
});

module.exports = mongoose.model('marriage', Schema);