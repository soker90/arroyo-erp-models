const {Schema, model} = require('mongoose');

const productSchema = new Schema({
  name: String,
  code: String,
  provider: String,
  amount: Number,
  updateDate: Date,
  iva: Number,
  re: Number,
});

module.exports = model('Products', productSchema);
