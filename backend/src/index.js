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

mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 10000,   // 10 секунд таймаут
  socketTimeoutMS: 45000,
  retryWrites: true,
  w: "majority",
})
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch(err => {
    console.error('❌ MongoDB connection error:', err.message);
    // process.exit(1); // раскомментировать, если хочешь авто-restart при падении
  });

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