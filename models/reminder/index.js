const {
        Schema,
        model,
      } = require('mongoose');

const ReminderSchema = new Schema({
  message: String,
}, { versionKey: false });

module.exports = model('Reminder', ReminderSchema);
