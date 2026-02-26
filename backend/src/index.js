require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const userRoutes = require('./routes/user');
const promoRoutes = require('./routes/promo');
const tasksRoutes = require('./routes/tasks');

const app = express();

app.use(cors({ origin: process.env.FRONTEND_URL || '*' }));
app.use(express.json());

// Публичная строка подключения (твоя из mongo-сервиса)
const PUBLIC_MONGO_URI = 'mongodb://mongo:tzRwNdsNpmYaWZHJiZZakMyeABWrtJvf@shinkansen.proxy.rlwy.net:35126/railway?retryWrites=true&w=majority&directConnection=true&ssl=true';

// Функция подключения с ретраями
const connectDB = async (retries = 5, delay = 5000) => {
  for (let i = 0; i < retries; i++) {
    try {
      console.log(`Попытка подключения к MongoDB (${i + 1}/${retries})...`);
      await mongoose.connect(PUBLIC_MONGO_URI, {
        serverSelectionTimeoutMS: 30000,
        socketTimeoutMS: 90000,
        connectTimeoutMS: 30000,
        retryWrites: true,
        w: 'majority',
        family: 4,
        keepAlive: true,
        keepAliveInitialDelay: 300000,
      });
      console.log('✅ MongoDB успешно подключен');
      
      // Создаём стартовый промокод
      const Promo = require('./models/Promo');
      const existing = await Promo.findOne({ code: 'SAT2026' });
      if (!existing) {
        await new Promo({ code: 'SAT2026', reward: 2222, maxUses: 1 }).save();
        console.log('Промокод SAT2026 создан');
      } else {
        console.log('Промокод SAT2026 уже существует');
      }
      
      return; // Успех — выходим из функции
    } catch (err) {
      console.error('❌ Ошибка подключения к MongoDB:', err.message);
      if (i < retries - 1) {
        console.log(`Повторная попытка через ${delay / 1000} секунд...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }
  console.error('❌ Не удалось подключиться к MongoDB после всех попыток');
  // process.exit(1); // раскомментируй, если хочешь, чтобы контейнер падал при неудаче
};

// Запускаем подключение
connectDB();

// Роуты (даже если база не подключилась — сервер работает)
app.use('/api/user', userRoutes);
app.use('/api/promo', promoRoutes);
app.use('/api/tasks', tasksRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));