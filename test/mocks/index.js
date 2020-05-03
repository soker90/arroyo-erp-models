const provider = require('./provider');
const account = require('./account');
const deliveryorder = require('./deliveryorder');
const product = require('./product');

module.exports = {
  ...provider,
  ...account,
  ...deliveryorder,
  ...product,
};
