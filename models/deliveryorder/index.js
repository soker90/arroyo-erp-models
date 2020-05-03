const {Schema, model} = require('mongoose');
const changeProviderPreSave = require('./hooks/change-provider-pre-save');

const deliveryOrderSchema = new Schema({
  date: Date,
  provider: String,
  products: [],
  size: Number,
  total: Number,
});

deliveryOrderSchema.pre('save', changeProviderPreSave);

module.exports = model('DeliveryOrder', deliveryOrderSchema);

