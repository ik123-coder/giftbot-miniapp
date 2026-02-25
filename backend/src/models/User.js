const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  telegramId: { type: Number, required: true, unique: true },
  username: String,
  firstName: String,
  photoUrl: String,
  balance: { type: Number, default: 0 },
  referredBy: { type: Number },
  referredUsers: [{
    telegramId: Number,
    firstName: String,
    username: String,
    photoUrl: String
  }],
  completedTasks: [{ type: String }],
  claimedReferralBonus: { type: Boolean, default: false },
  registeredAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);