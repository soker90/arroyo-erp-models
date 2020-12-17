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
  provider: String,
  nameProvider: String,
  payment: {
    paymentDate: { type: Number },
    type: { type: String },
    numCheque: { type: String },
    paid: { type: Boolean },
    invoicesOrder: { type: String },
  },
  bookColumn: String, // Name column in book
  businessName: String,
  cif: String,
  mailSend: Boolean, // Ha sido enviada por correo eléctronico
}, { versionKey: false });

module.exports = model('Invoice', invoiceSchema);
