const {
  Schema,
  model,
} = require('mongoose');

const clientInvoiceSchema = new Schema({
  deliveryOrders: [{
    date: Number,
    total: Number,
    products: [{
      name: String,
      weight: Number,
      unit: String,
      price: Number,
      total: Number,
      productId: String,
    }],
  }],
  date: Number,
  taxBase: Number,
  iva: Number,
  total: Number,
  nInvoice: String,
  client: String,
  nameClient: String,
  businessName: String,
  paid: Boolean,
  paymentType: String,
  paymentDate: Number
}, { versionKey: false });

module.exports = model('ClientInvoice', clientInvoiceSchema);
