const {Schema, model} = require('mongoose');

const productSchema = new Schema({
  name: String,
  code: String,
  provider: String,
  rate: Number,
  iva: Number,
  re: Number,
  amount: Number,
}, { versionKey: false });

module.exports = model('Products', productSchema);
