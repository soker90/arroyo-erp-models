const { Schema, model } = require('mongoose');

const invoiceSchema = new Schema({
  deliveryOrders: [],
  dateInvoice: Number,
  dateRegister: Number,
  total: Number,
  iva: Number,
  re: Number,
  nOrder: Number,
  nInvoice: String,
  concept: String,
  taxBase: Number,
  reRental: Number, //Alquiler
  provider: String,
  nameProvider: String,
  payment: {
    paymentDate: Number,
    type: String,
  },
});

module.exports = model('Invoice', invoiceSchema);
