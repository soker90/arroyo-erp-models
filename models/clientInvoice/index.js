const { Schema, model } = require('mongoose');

const clientInvoiceSchema = new Schema({
  deliveryOrders: [{
    date: Number,
    products: [{
      name: String,
      weight: Number,
      unit: String,
      price: Number,
      total: Number
    }]
  }],
  date: Number,
  taxBase: Number,
  iva: Number,
  total: Number,
  nInvoice: String,
  client: String,
}, { versionKey: false });

module.exports = model('ClientInvoice', clientInvoiceSchema);
