const mongoose = require('mongoose');

const leaveSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  leaveType: { type: String, enum: ['Sick', 'Casual'], required: true },
  duration: { type: Number, required: true },
});

module.exports = mongoose.model('Leave', leaveSchema);
