const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/api/checkMembership', async (req, res) => {
  const { chatId, userId } = req.body;
  const botToken = process.env.BOT_TOKEN; // Добавь в .env на Railway

  if (!botToken) {
    return res.status(500).json({ error: 'BOT_TOKEN not set' });
  }

  try {
    const response = await axios.get(`https://api.telegram.org/bot${botToken}/getChatMember`, {
      params: {
        chat_id: chatId,
        user_id: userId,
      },
    });

    const data = response.data;

    if (!data.ok) {
      return res.json({ subscribed: false });
    }

    const status = data.result.status;
    const subscribed = ['member', 'administrator', 'creator'].includes(status);

    res.json({ subscribed });
  } catch (error) {
    console.error('Ошибка проверки подписки:', error.message);
    res.json({ subscribed: false });
  }
});

module.exports = router;