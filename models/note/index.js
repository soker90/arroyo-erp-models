const { Schema, model } = require('mongoose');

const NoteSchema = new Schema({
  date: Number,
  message: String,
}, { versionKey: false });

module.exports = model('Note', NoteSchema);
