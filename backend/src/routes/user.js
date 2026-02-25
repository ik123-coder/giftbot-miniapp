const express = require('express');
const router = express.Router();
const User = require('../models/User');
const authMiddleware = require('../middleware/auth');

router.post('/init', authMiddleware, async (req, res) => {
  const { telegramUser, startParam } = req;
  let user = await User.findOne({ telegramId: telegramUser.id });

  if (!user) {
    user = new User({
      telegramId: telegramUser.id,
      username: telegramUser.username,
      firstName: telegramUser.first_name,
      photoUrl: telegramUser.photo_url,
      balance: 0
    });

    // Обработка реферальной ссылки
    if (startParam && startParam.startsWith('ref_')) {
      const referrerId = parseInt(startParam.split('_')[1]);
      const referrer = await User.findOne({ telegramId: referrerId });
      if (referrer) {
        user.referredBy = referrerId;
        referrer.referredUsers.push({
          telegramId: user.telegramId,
          firstName: user.firstName,
          username: user.username,
          photoUrl: user.photoUrl
        });
        referrer.balance += 1000;
        await referrer.save();
      }
    }
    await user.save();
  }

  res.json(user);
});

router.get('/me', authMiddleware, async (req, res) => {
  const user = await User.findOne({ telegramId: req.telegramUser.id });
  res.json(user);
});

module.exports = router;