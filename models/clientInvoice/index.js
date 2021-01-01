const {
  Schema,
  model,
} = require('mongoose');
const calcPreSave = require('./hooks/calc-pre-save');

const clientInvoiceSchema = new Schema({
  deliveryOrders: [{
    date: Number,
    products: [{
      name: String,
      weight: Number,
      unit: String,
      price: Number,
      total: Number,
    }],
  }],
  date: Number,
  taxBase: Number,
  iva: Number,
  total: Number,
  nInvoice: String,
  client: String,
  nameClient: String,
}, { versionKey: false });

clientInvoiceSchema.pre('save', calcPreSave);

module.exports = model('ClientInvoice', clientInvoiceSchema);
