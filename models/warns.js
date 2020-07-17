const mongoose = require('mongoose')
const Schema = new mongoose.Schema({
    Warns: Array,
    User: String,
    Guild: String,
    Date: String,
})
module.exports = mongoose.model("warns", Schema)