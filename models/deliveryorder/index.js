const {Schema, model} = require('mongoose');
const calcFieldsPreSave = require('./hooks/calc-fields-pre-save');

const deliveryOrderSchema = new Schema({
  date: Number,
  provider: String,
  nameProvider: String,
  products: [],
  size: Number,
  total: Number,
  iva: Number,
  rate: Number,
  re: Number,
});

deliveryOrderSchema.pre('save', calcFieldsPreSave);

module.exports = model('DeliveryOrder', deliveryOrderSchema);

