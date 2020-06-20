const { Schema, model } = require('mongoose');
const incrementId = require('./hooks/increment-id-pre-save');

const invoiceSchema = new Schema({
  deliveryOrders: [],
  dateInvoice: Number,
  dateRegister: Number,
  total: Number,
  iva: Number,
  rate: Number,
  re: Number,
  nOrder: Number,
  nInvoice: Number,
  concept: String,
  taxBase: Number,
  reRental: Number, //Alquiler
});

invoiceSchema.pre('save', incrementId);
module.exports = model('Invoice', invoiceSchema);

