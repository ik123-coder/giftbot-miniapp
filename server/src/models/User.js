const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  telegramId: { type: Number, required: true, unique: true },
  firstName: { type: String, required: true },
  username: { type: String, sparse: true },
  photoUrl: { type: String, default: null },
  balance: { type: Number, default: 500, min: 0 },
  referralCount: { type: Number, default: 0 },
  referrals: [{ type: Number }], // telegramId приглашённых
  createdAt: { type: Date, default: Date.now },
  lastActive: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userSchema);