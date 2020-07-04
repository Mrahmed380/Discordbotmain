const mongoose = require('mongoose')
const Schema = new mongoose.Schema({
    Money: Array,
    UserID: String,
    GuildID: String,
})
module.exports = mongoose.model("money", Schema)