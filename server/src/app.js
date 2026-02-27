require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');

const apiRoutes = require('./routes/index');

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());

// Подключение БД
connectDB();

// Роуты
app.use('/api', apiRoutes);

// Тестовый маршрут
app.get('/', (req, res) => {
  res.json({ message: 'GiftBot API v1.0 - running' });
});

// Обработка ошибок
app.use(errorHandler);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});