async function calcFieldsPreSave(next) {
  this.size = this.products.length;
  this.total = this.products.reduce((accumulator, currentValue) => accumulator + currentValue);

  const { name } = await ProviderModel.findOne({ _id: this.provider });
  if (name) {
    this.nameProvider = name;
    next();
  } else {
    next(new Error('No se ha encontrado el provedor'));
  }
}

module.exports = calcFieldsPreSave;
