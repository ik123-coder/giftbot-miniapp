const mongoose = require('mongoose');

const PromoSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  reward: { type: Number, required: true },
  maxUses: { type: Number, default: 1 },
  usedBy: [{ type: Number }]
});

module.exports = mongoose.model('Promo', PromoSchema);