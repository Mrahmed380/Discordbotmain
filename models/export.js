const mongoose = require('mongoose')
const Schema = new mongoose.Schema({
    Server: Array,
    Guild: String,
    Date: String,
    Template: String
})
module.exports = mongoose.model("server", Schema)