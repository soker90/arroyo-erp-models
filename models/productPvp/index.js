const {
  Schema,
  model
} = require('mongoose');

const ProductPvpSchema = new Schema({
  product: String,
  date: Number,
  price: Number,
}, { versionKey: false });

module.exports = model('ProductPvp', ProductPvpSchema);
