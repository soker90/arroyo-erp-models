const { Schema, model } = require('mongoose');

const NoteSchema = new Schema({
  date: Number,
  concept: String,
  quantity: String,
  price: String,
  amount: String,
  clarification: String,
}, { versionKey: false });

module.exports = model('Note', NoteSchema);
