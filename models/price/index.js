const {
  Schema,
  model
} = require('mongoose');

const PriceSchema = new Schema({
  product: String,
  date: Number,
  price: Number,
  cost: Number,
  deliveryOrder: String,
  invoice: String
}, { versionKey: false });

module.exports = model('Price', PriceSchema);
