const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 минут
  max: 100, // лимит 100 запросов с одного IP
  message: { success: false, message: 'Слишком много запросов, попробуйте позже' },
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = limiter;