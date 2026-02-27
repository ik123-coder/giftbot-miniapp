// Пока оставляем пустую модель — в будущем можно хранить отдельно рефералов
// Сейчас вся логика в User.referrals и User.referralCount

const mongoose = require('mongoose');

const referralSchema = new mongoose.Schema({
  referrerId: { type: Number, required: true },
  referredId: { type: Number, required: true },
  rewardGiven: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Referral', referralSchema);