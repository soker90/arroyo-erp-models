const ProviderModel = require('../../provider');
async function calcFieldsPreSave(next) {
  if (!this.products) this.products = [];

  this.size = this.products.length;
  this.iva = this.re = this.total = 0;

  this.products.forEach(({iva, re, total}) => {
    /**
     * Se calcula en el servicio
     * products[i].re = price * quantity * product.re
     * products[i].iva = price * quantity * product.iva
     * products[i].total = products[i].iva + products[i].re + (price * quantity)
     */
    if (iva) this.iva += iva;
    if (re) this.re += re;
    if (total) this.total += total;
  });

  if(!this.nameProvider) {
    const { name } = await ProviderModel.findOne({ _id: this.provider });

    if (name) {
      this.nameProvider = name;
    } else {
      next(new Error('No se ha encontrado el provedor'));
    }
  }
  next();
}

module.exports = calcFieldsPreSave;
