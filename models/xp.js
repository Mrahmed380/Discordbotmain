const mongoose = require('mongoose')
const Schema = new mongoose.Schema({
    xp: Number,
    level: Number,
    User: String,
})
module.exports = mongoose.model("xp", Schema)