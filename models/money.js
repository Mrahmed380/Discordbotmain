const mongoose = require('mongoose')
const Schema = new mongoose.Schema({
    Money: Array,
    User: String,
    Guild: String,
})
module.exports = mongoose.model("warns", Schema)