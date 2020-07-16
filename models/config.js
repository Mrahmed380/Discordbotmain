const mongoose = require('mongoose')
const Schema = new mongoose.Schema({
    Prefix: String,
    UserID: String,
    GuildID: String,
})
module.exports = mongoose.model("prefix", Schema)