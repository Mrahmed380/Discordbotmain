const mongoose = require('mongoose')
const Schema = new mongoose.Schema({
    Prefix: String,
    Guild: String,
})
module.exports = mongoose.model("prefix", Schema)