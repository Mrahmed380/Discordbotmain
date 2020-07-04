const mongoose = require('mongoose')
const Schema = new mongoose.Schema({
    GTA: Array,
    UserID: String,
    GuildID: String,
})
module.exports = mongoose.model("gta", Schema)