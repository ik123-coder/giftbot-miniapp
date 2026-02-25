const validateInitData = require('../utils/validateInitData');

const authMiddleware = (req, res, next) => {
  const initData = req.body.initData;
  const botToken = process.env.BOT_TOKEN;

  if (!initData || !validateInitData(initData, botToken)) {
    return res.status(403).json({ error: 'Invalid initData' });
  }

  const data = new URLSearchParams(initData);
  req.telegramUser = JSON.parse(data.get('user'));
  req.startParam = data.get('start_param') || null;
  next();
};

module.exports = authMiddleware;