const {Schema, model} = require('mongoose');

const PriceSchema = new Schema({
  product: String,
  date: Number,
  price: Number,
}, { versionKey: false });

module.exports = model('Price', PriceSchema);
