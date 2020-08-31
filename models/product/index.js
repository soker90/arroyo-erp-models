const { Schema, model } = require('mongoose');

const productSchema = new Schema({
  name: String,
  code: String,
  provider: String,
  nameProvider: String,
  rate: Number,
  iva: Number,
  re: Number,
  profit: Number,
}, { versionKey: false });

module.exports = model('Products', productSchema);
