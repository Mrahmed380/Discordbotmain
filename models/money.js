const mongoose = require('mongoose')
const Schema = new mongoose.Schema({
    Money: Number,
    Guild: String,
    Purchases: Number,
    User: String,
    inventory: Object,
    shop: Object,
    passive: String,
    notis: String,
})
module.exports = mongoose.model("coins", Schema)