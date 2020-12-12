const { Schema, model } = require('mongoose');

const PriceChangeSchema = new Schema({
  product: String,
  productName: String,
  date: Number,
  price: Number,
  diff: Number,
  deliveryOrder: String,
}, { versionKey: false });

module.exports = model('PriceChange', PriceChangeSchema);
