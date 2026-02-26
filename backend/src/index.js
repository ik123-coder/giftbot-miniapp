require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const userRoutes = require('./routes/user');
const promoRoutes = require('./routes/promo');
const tasksRoutes = require('./routes/tasks');

const app = express();

// CORS — разрешаем запросы с фронтенда (или с любого, если FRONTEND_URL не указан)
app.use(cors({ origin: process.env.FRONTEND_URL || '*' }));
app.use(express.json());

// Собираем строку подключения из отдельных переменных Railway
const mongoUser = process.env.MONGOUSER || 'mongo';
const mongoPassword = process.env.MONGOPASSWORD;
const mongoHost = process.env.MONGOHOST || 'mongodb.railway.internal';
const mongoPort = process.env.MONGOPORT || '27017';
const mongoDbName = process.env.MONGODBNAME || 'railway';

// Защита: если пароля нет — явно падаем с понятной ошибкой
if (!mongoPassword) {
  console.error('❌ ОШИБКА: MONGOPASSWORD не найден в переменных окружения');
  process.exit(1);
}

const mongoUri = `mongodb://${mongoUser}:${mongoPassword}@${mongoHost}:${mongoPort}/${mongoDbName}?retryWrites=true&w=majority`;

console.log('Попытка подключения к MongoDB по адресу:', mongoUri.replace(mongoPassword, '***')); // скрываем пароль в логах

mongoose.connect(mongoUri, {
  serverSelectionTimeoutMS: 15000,   // даём больше времени на поиск сервера
  socketTimeoutMS: 60000,
  connectTimeoutMS: 30000,
  retryWrites: true,
  w: 'majority',
  family: 4,                         // используем IPv4 (иногда помогает с internal DNS)
})
  .then(() => {
    console.log('✅ MongoDB успешно подключен');
    
    // Создаём стартовый промокод (только после успешного подключения)
    const Promo = require('./models/Promo');
    Promo.findOne({ code: 'SAT2026' })
      .then(existing => {
        if (!existing) {
          return new Promo({ code: 'SAT2026', reward: 2222, maxUses: 1 }).save();
        }
      })
      .then(() => console.log('Промокод SAT2026 проверен/создан'))
      .catch(err => console.error('Ошибка при создании промокода:', err.message));
  })
  .catch(err => {
    console.error('❌ Ошибка подключения к MongoDB:', err.message);
    // Можно раскомментировать, если хочешь, чтобы контейнер падал и Railway его перезапускал
    // process.exit(1);
  });

// Роуты
app.use('/api/user', userRoutes);
app.use('/api/promo', promoRoutes);
app.use('/api/tasks', tasksRoutes);

// Запуск сервера
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});