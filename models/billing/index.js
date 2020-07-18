const {Schema, model} = require('mongoose');
const sumTrimesters = require('./hooks/sum-trimesters-pre-save');

const billingSchema = new Schema({
  year: Number,
  provider: String,
  trimesters: [],
  annual: Number,
}, { versionKey: false });

billingSchema.pre('save', sumTrimesters);

module.exports = model('Billing', billingSchema);
