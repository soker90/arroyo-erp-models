const { Schema, model } = require('mongoose');

const paymentSchema = new Schema({
  provider: String,
  nameProvider: String,
  type: String,
  invoices: [String],
  nOrder: String,
  paymentDate: Number,
  merged: Boolean,
  amount: Number,
  numCheque: String,
  paid: Boolean,
  payments: [String],
  invoiceDate: Number,
  nInvoice: String,
}, { versionKey: false });

module.exports = model('Payment', paymentSchema);
