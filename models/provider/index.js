const {Schema, model} = require('mongoose');

const providersSchema = new Schema({
  name: String,
  address: String,
  phone: String,
  email: String,
});

module.exports = model('Providers', providersSchema);

