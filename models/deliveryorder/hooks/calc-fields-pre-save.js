const ProviderModel = require('../../provider');
async function calcFieldsPreSave(next) {
  if (!this.products) this.products = [];

  this.size = this.products.length;
  this.iva = this.re = this.total = 0;

  this.products.forEach(({product, iva, re, total}) => {
    if (iva) this.iva += iva;
    if (re) this.re += re;
    if (total) this.total += total;
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
