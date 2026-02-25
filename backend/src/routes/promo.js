const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Promo = require('../models/Promo');
const authMiddleware = require('../middleware/auth');

router.post('/apply', authMiddleware, async (req, res) => {
  const { code } = req.body;
  const userId = req.telegramUser.id;

  const promo = await Promo.findOne({ code: code.toUpperCase() });
  if (!promo) return res.status(404).json({ error: 'Промокод не найден' });

  if (promo.usedBy.includes(userId)) return res.status(400).json({ error: 'Вы уже активировали этот промокод' });
  if (promo.usedBy.length >= promo.maxUses) return res.status(400).json({ error: 'Промокод уже использован' });

  const user = await User.findOne({ telegramId: userId });
  user.balance += promo.reward;
  promo.usedBy.push(userId);
  await user.save();
  await promo.save();

  res.json({ success: true, newBalance: user.balance });
});

module.exports = router;