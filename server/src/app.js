require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(cors({ origin: '*' })); // для dev; в проде укажи домен Railway
app.use(express.json());

// Подключение БД
connectDB();

// Роуты
app.use('/api/user', userRoutes);

// Тестовый маршрут
app.get('/', (req, res) => {
  res.send('GiftBot Backend is running');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});