const mongoose = require('mongoose')
const Schema = new mongoose.Schema({
    cmd: Array,
    Guild: String,
})
module.exports = mongoose.model("commands", Schema)