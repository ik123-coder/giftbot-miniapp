const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const { port, mongoUri, botToken } = require('./config');
const errorHandler = require('./middleware/errorHandler');
const apiRoutes = require('./routes/index');

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());

// Подключение к MongoDB
connectDB(mongoUri);

// Роуты
app.use('/api', apiRoutes);

// Тестовый маршрут
app.get('/', (req, res) => {
  res.json({ message: 'GiftBot API v1.0 - running' });
});

// Проверка подписки на канал
app.post('/api/checkMembership', async (req, res) => {
  const { chatId, userId } = req.body;

  if (!botToken) return res.status(500).json({ error: 'BOT_TOKEN не задан' });

  try {
    const axios = require('axios');
    const response = await axios.get(`https://api.telegram.org/bot${botToken}/getChatMember`, {
      params: { chat_id: chatId, user_id: userId },
    });

    const data = response.data;
    if (!data.ok) return res.json({ subscribed: false });

    const status = data.result.status;
    const subscribed = ['member', 'administrator', 'creator'].includes(status);

    res.json({ subscribed });
  } catch (error) {
    console.error('Ошибка:', error.message);
    res.json({ subscribed: false });
  }
});

// Обработка ошибок
app.use(errorHandler);

// Старт сервера
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});