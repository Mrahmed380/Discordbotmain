const mongoose = require('mongoose')
const Schema = new mongoose.Schema({
    Title: String,
    Content: String,
    User: String,
})
module.exports = mongoose.model("custom", Schema)