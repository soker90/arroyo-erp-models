const { Schema, model } = require('mongoose');

const PriceSchema = new Schema({
  product: String,
  date: Number,
  price: Number,
  cost: Number,
  sale: Number,
  deliveryOrder: String,
}, { versionKey: false });

module.exports = model('Price', PriceSchema);
