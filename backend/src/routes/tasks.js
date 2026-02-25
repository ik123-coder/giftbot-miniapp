const express = require('express');
const router = express.Router();
const User = require('../models/User');
const axios = require('axios');
const authMiddleware = require('../middleware/auth');

const BOT_TOKEN = process.env.BOT_TOKEN;
const CHANNEL_USERNAME = '@broketalking'; // для проверки подписки

router.post('/complete', authMiddleware, async (req, res) => {
  const { taskId } = req.body;
  const user = await User.findOne({ telegramId: req.telegramUser.id });

  if (user.completedTasks.includes(taskId)) return res.status(400).json({ error: 'Уже выполнено' });

  let reward = 0;
  if (taskId === 'join_chat') reward = 500;
  if (taskId === 'subscribe_channel') reward = 500;

  user.completedTasks.push(taskId);
  user.balance += reward;
  await user.save();

  res.json({ success: true, newBalance: user.balance });
});

router.post('/check-subscription', authMiddleware, async (req, res) => {
  const userId = req.telegramUser.id;
  try {
    const resp = await axios.get(`https://api.telegram.org/bot${BOT_TOKEN}/getChatMember?chat_id=${CHANNEL_USERNAME}&user_id=${userId}`);
    const status = resp.data.result.status;
    if (['member', 'administrator', 'creator'].includes(status)) {
      const user = await User.findOne({ telegramId: userId });
      if (!user.completedTasks.includes('subscribe_channel')) {
        user.completedTasks.push('subscribe_channel');
        user.balance += 500;
        await user.save();
      }
      return res.json({ success: true, newBalance: user.balance });
    }
    res.status(400).json({ error: 'Вы не подписаны' });
  } catch (e) {
    res.status(500).json({ error: 'Ошибка проверки' });
  }
});

module.exports = router;