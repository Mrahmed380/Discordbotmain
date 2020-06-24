const mongoose = require('mongoose')
const Schema = new mongoose.Schema({
    Warns: Array,
    User: String,
    Guild: String,ddd
})
module.exports = mongoose.model("warns", Schema)