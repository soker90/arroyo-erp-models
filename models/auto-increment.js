const mongoose = require('mongoose');

const AutoIncrementSchema = mongoose.Schema({
  seq: { type: Number, default: 1 },
  name: { type: String, required: true },
});

/* istanbul ignore next */
/**
 * Create a new document initializing the value of seq to 1 or
 * increment that value if the document exists
 */
async function getCounter(counterName) {
  const document = await this.findOneAndUpdate(
    { name: counterName },
    { $inc: { seq: 1 } },
    { new: true, upsert: true },
  );

  return document.seq;
}

AutoIncrementSchema.static('increment', getCounter);

const modelName = 'AutoIncrement';

module.exports = mongoose.model(modelName, AutoIncrementSchema, modelName);
