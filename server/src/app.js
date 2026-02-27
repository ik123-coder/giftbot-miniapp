require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');
const limiter = require('./middleware/rateLimiter');
const apiRoutes = require('./routes/index');

const app = express();

app.use(cors({ origin: '*' })); // в продакшене ограничить
app.use(express.json());
app.use(limiter);

// Подключение БД
connectDB();

// Роуты
app.use('/api', apiRoutes);

// Обработка ошибок
app.use(errorHandler);

app.get('/', (req, res) => {
  res.json({ message: 'GiftBot API v1.0 - running' });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});