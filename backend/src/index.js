// Собираем строку подключения — приоритет ПУБЛИЧНОМУ адресу Railway
let mongoUri;

// 1. Пробуем использовать публичную строку, если она есть (самый стабильный вариант)
if (process.env.MONGO_PUBLIC_URL) {
  mongoUri = process.env.MONGO_PUBLIC_URL;
  console.log('Используем публичную строку из MONGO_PUBLIC_URL');
}
// 2. Если нет публичной — собираем из отдельных частей, но с публичным хостом
else if (process.env.MONGOPASSWORD && process.env.MONGOHOST?.includes('proxy.rlwy.net')) {
  mongoUri = `mongodb://${process.env.MONGOUSER || 'mongo'}:${process.env.MONGOPASSWORD}@${process.env.MONGOHOST}:${process.env.MONGOPORT || '27017'}/${process.env.MONGODBNAME || 'railway'}?retryWrites=true&w=majority&directConnection=true`;
  console.log('Собрана публичная строка из частей (proxy.rlwy.net)');
}
// 3. Фоллбек — только если ничего нет (но лучше не доходить сюда)
else {
  const mongoUser = process.env.MONGOUSER || 'mongo';
  const mongoPassword = process.env.MONGOPASSWORD;
  const mongoHost = process.env.MONGOHOST || 'mongodb.railway.internal';
  const mongoPort = process.env.MONGOPORT || '27017';
  const mongoDbName = process.env.MONGODBNAME || 'railway';

  mongoUri = `mongodb://${mongoUser}:${mongoPassword}@${mongoHost}:${mongoPort}/${mongoDbName}?retryWrites=true&w=majority&directConnection=true`;
  console.log('Фоллбек на внутренний адрес (может быть нестабильным)');
}

// Логируем (пароль скрыт)
console.log('Попытка подключения к MongoDB по адресу:', mongoUri.replace(process.env.MONGOPASSWORD || '', '***'));

mongoose.connect(mongoUri, {
  serverSelectionTimeoutMS: 15000,
  socketTimeoutMS: 60000,
  connectTimeoutMS: 30000,
  retryWrites: true,
  w: 'majority',
  family: 4, // IPv4 для стабильности
})
  .then(() => {
    console.log('✅ MongoDB успешно подключен');
    // Создание промокода после успешного подключения
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
    // Раскомментируй, если хочешь авто-перезапуск контейнера при падении
    // process.exit(1);
  });