const AutoIncrement = require('../../auto-increment');

async function incrementIdPreSave(next) {
  this.nOrder = await AutoIncrement.increment('invoice');
  next();
}

module.exports = incrementIdPreSave;
