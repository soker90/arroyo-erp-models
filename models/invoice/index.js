const { Schema, model } = require("mongoose");

const invoiceSchema = new Schema({
  deliveryOrders: [],
  dateInvoice: Number,
  dateRegister: Number,
  total: Number,
  iva: Number,
  rate: Number,
  re: Number,
  nOrder: Number,
  nInvoice: String,
  concept: String,
  taxBase: Number,
  reRental: Number, //Alquiler
  provider: String,
  nameProvider: String,
});

module.exports = model("Invoice", invoiceSchema);
