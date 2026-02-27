const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  reward: { type: Number, required: true },
  type: { type: String, enum: ['subscribe', 'join', 'action', 'daily'], default: 'action' },
  link: { type: String },
  active: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Task', taskSchema);