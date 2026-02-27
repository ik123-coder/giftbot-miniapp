// config/db.js
const mongoose = require('mongoose');

const connectDB = async (mongoUri) => {
  try {
    if (!mongoUri) throw new Error('Mongo URI не задан');

    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // таймаут на поиск сервера
    });

    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;