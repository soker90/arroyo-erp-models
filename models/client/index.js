const { Schema, model } = require('mongoose');

const clientsSchema = new Schema({
  name: String,
  address: String,
  phone: String,
  email: String,
  businessName: String,
  cif: String
}, { versionKey: false });

module.exports = model('Client', clientsSchema, 'clients');

