const {ProviderModel} = require('../..');

async function changeProviderPreSave(next) {
  if (!this.isModified('provider')) {
    next()
    return
  }

  const {name} = await ProviderModel.findOne({_id: this.provider});
  if (name) {
    this.nameProvider = name;
    next();
  } else {
    next(new Error('No se ha encontrado el provedor'));
  }
}

module.exports = changeProviderPreSave;
