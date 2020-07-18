const mongoose = require('mongoose')
const Schema = new mongoose.Schema({
    Money: Array,
    User: String,
})
module.exports = mongoose.model("coins", Schema)