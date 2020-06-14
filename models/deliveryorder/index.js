const { Schema, model } = require('mongoose');

const deliveryOrderSchema = new Schema({
  date: Number,
  provider: String,
  nameProvider: String,
  products: [],
  size: Number,
  total: Number,
  iva: Number,
  rate: Number,
  re: Number,
  nOrder: Number,
  nInvoice: Number,
  taxBase: Number,
});

module.exports = model('DeliveryOrder', deliveryOrderSchema);

