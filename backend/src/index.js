require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose'); // ← mongoose импортируется здесь, до использования
const cors = require('cors');

const userRoutes = require('./routes/user');
const promoRoutes = require('./routes/promo');
const tasksRoutes = require('./routes/tasks');

const app = express();

app.use(cors({ origin: process.env.FRONTEND_URL || '*' }));
app.use(express.json());

// Собираем строку подключения — приоритет публичному адресу
let mongoUri;

// 1. Если есть готовая публичная строка — используем её
if (process.env.MONGO_PUBLIC_URL) {
  mongoUri = process.env.MONGO_PUBLIC_URL;
  console.log('Используем готовую публичную строку MONGO_PUBLIC_URL');
}
// 2. Собираем из частей (твой публичный хост shinkansen.proxy.rlwy.net)
else if (process.env.MONGOPASSWORD) {
  const mongoUser = process.env.MONGOUSER || 'mongo';
  const mongoPassword = process.env.MONGOPASSWORD;
  const mongoHost = process.env.MONGOHOST || 'shinkansen.proxy.rlwy.net';
  const mongoPort = process.env.MONGOPORT || '35126';
  const mongoDbName = process.env.MONGODBNAME || 'railway';

  mongoUri = `mongodb://${mongoUser}:${mongoPassword}@${mongoHost}:${mongoPort}/${mongoDbName}?retryWrites=true&w=majority&directConnection=true`;
  console.log('Собрана строка из переменных (приоритет публичному прокси)');
}
// 3. Фоллбек (редко нужен)
else {
  console.error('❌ Нет данных для подключения к MongoDB! Проверь переменные');
  process.exit(1);
}

// Лог с скрытым паролем
console.log('Попытка подключения к MongoDB по адресу:', mongoUri.replace(process.env.MONGOPASSWORD || '', '***'));

mongoose.connect(mongoUri, {
  serverSelectionTimeoutMS: 15000,
  socketTimeoutMS: 60000,
  connectTimeoutMS: 30000,
  retryWrites: true,
  w: 'majority',
  family: 4,
})
  .then(() => {
    console.log('✅ MongoDB успешно подключен');
    
    // Создаём промокод после успешного подключения
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
  });

// Роуты
app.use('/api/user', userRoutes);
app.use('/api/promo', promoRoutes);
app.use('/api/tasks', tasksRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));