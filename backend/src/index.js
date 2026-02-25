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

mongoose.connect(process.env.MONGO_URI).then(async () => {
  console.log('MongoDB connected');

  // Создаём стартовый промокод
  const Promo = require('./models/Promo');
  const existing = await Promo.findOne({ code: 'SAT2026' });
  if (!existing) {
    await new Promo({ code: 'SAT2026', reward: 2222, maxUses: 1 }).save();
    console.log('Промокод SAT2026 создан');
  }
});

app.use('/api/user', userRoutes);
app.use('/api/promo', promoRoutes);
app.use('/api/tasks', tasksRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));