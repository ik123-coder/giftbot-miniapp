// config/index.js
require('dotenv').config();

module.exports = {
  port: process.env.PORT || 8080,
  mongoUri: process.env.MONGO_URI,
  botToken: process.env.BOT_TOKEN,
  nodeEnv: process.env.NODE_ENV || 'development',
};