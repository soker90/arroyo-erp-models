const { Schema, model } = require('mongoose');

const providersSchema = new Schema({
  name: String,
  address: String,
  city: String,
  postalCode: String,
  province: String,
  phone: String,
  email: String,
  businessName: String,
  cif: String,
  hasRate: Boolean,
}, { versionKey: false });

module.exports = model('Provider', providersSchema, 'providers');

