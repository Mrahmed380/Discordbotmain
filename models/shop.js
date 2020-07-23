const mongoose = require('mongoose')
const Schema = new mongoose.Schema({
    place: String,
    shop: Object,
})
module.exports = mongoose.model("CoinsShop", Schema)