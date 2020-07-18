const mongoose = require('mongoose')
const Schema = new mongoose.Schema({
    Money: Number,
    Purchases: Number,
    User: String,
    inventory: Object,
    shop: Object,
})
module.exports = mongoose.model("coins", Schema)