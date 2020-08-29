const { Schema, model } = require('mongoose');
const sumAmount = require('./hooks/sum-amount-pre-updateOne');

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

billingSchema.pre('updateOne', sumAmount);

module.exports = model('Billing', billingSchema);
