/**
 * Devuelve el número del trimestre del string
 * @param {[string]} update
 * @returns {string}
 */
const getNumberOfTrimester = update => update[0].match(/\d/g)[0];

/**
 * Devuleve el nuevo registro de factura a añadir
 * @param {Object} _update
 * @param {String} trimester
 * @returns {*}
 */
const getCurrentInvoice = ({ _update }, trimester) => _update['$push'][`invoicesTrimester${trimester}`];

/**
 * Devuelve un array con la suma de facturas de cada trimestre
 * @param {Object} model
 * @param {Object} currentInvoice
 * @param {String} trimester
 * @returns {Object.trimesters|[]|[number, number, number, number]}
 */
const getSumByTrimesters = ({ model, currentInvoice, trimester }) => {
  let trimesters = model?.trimesters || [0, 0, 0, 0];

  trimesters[trimester] = model?.[`invoicesTrimester${trimester}`]?.reduce(
    (accumulator, currentValue) => (accumulator + currentValue.total), currentInvoice.total)
    || currentInvoice.total;
  return trimesters;
};

/**
 * Devuelve la suma de todos los trimsetres
 * @param {Array} trimesters
 * @returns {Number}
 */
const getSumAnnual = trimesters => trimesters.reduce(
  (accumulator, currentValue) => (accumulator + currentValue),
);

/**
 * Calcula la suma trimestral y anual
 * @param {function} next
 * @returns {Promise<void>}
 */
async function sumAmount(next) {
  const update = Object.keys(this._update['$push']);
  const model = await this.model.findOne(this._conditions);

  const trimester = getNumberOfTrimester(update);
  const trimesters = getSumByTrimesters({
    model,
    currentInvoice: getCurrentInvoice(this, trimester),
    trimester,
  });

  this.set('trimesters', trimesters);

  const annual = getSumAnnual(trimesters);
  this.set('annual', annual);

  next();
}

module.exports = sumAmount;
