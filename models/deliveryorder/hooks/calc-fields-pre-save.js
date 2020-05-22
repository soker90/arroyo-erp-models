const ProviderModel = require('../../provider');
async function calcFieldsPreSave(next) {
  if (!this.products) this.products = [];

  this.size = this.products.length;
  this.rate = 0;
  this.iva = 0;
  this.re = 0;
  this.total = 0;
  this.selectedProducts = [];

  this.products.forEach(({product, rate, iva, re, total}) => {
    if (rate) this.rate += rate;
    if (iva) this.iva += iva;
    if (re) this.re += re;
    if (total) this.total += total;
    this.selectedProducts.push(product);
  });

  const {name} = await ProviderModel.findOne({_id: this.provider});

  if (name) {
    this.nameProvider = name;
  } else {
    next(new Error('No se ha encontrado el provedor'));
  }
  next();
}

module.exports = calcFieldsPreSave;
