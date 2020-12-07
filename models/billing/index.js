const {
  Schema,
  model,
} = require('mongoose');

const invoiceTrimester = {
  invoice: String,
  total: Number,
  date: Number,
};

const billingSchema = new Schema({
  year: Number,
  provider: String,
  invoicesTrimester0: [invoiceTrimester],
  invoicesTrimester1: [invoiceTrimester],
  invoicesTrimester2: [invoiceTrimester],
  invoicesTrimester3: [invoiceTrimester],
  trimesters: [Number],
  annual: Number,
}, { versionKey: false });


module.exports = model('Billing', billingSchema);
