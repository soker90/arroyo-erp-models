const { Schema, model } = require('mongoose');

const clientsSchema = new Schema({
  name: String,
  address: String,
  city: String,
  postalCode: String,
  province: String,
  phone: String,
  email: String,
  businessName: String,
  cif: String,
  transfer: Boolean
}, { versionKey: false });

module.exports = model('Client', clientsSchema, 'clients');
