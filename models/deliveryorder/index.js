const {Schema, model} = require('mongoose');
const calcFieldsPreSave = require('./hooks/calc-fields-pre-save');

const deliveryOrderSchema = new Schema({
  date: Date,
  provider: String,
  products: [],
  size: Number,
  total: Number,
});

deliveryOrderSchema.pre('save', calcFieldsPreSave);

module.exports = model('DeliveryOrder', deliveryOrderSchema);

