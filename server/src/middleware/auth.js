const { validate } = require('@tma.js/init-data-node');

const authMiddleware = (req, res, next) => {
  const initDataRaw = req.headers['x-init-data'] || req.body.initData || req.query.initData;

  if (!initDataRaw) {
    return res.status(401).json({ error: 'initData not provided' });
  }

  try {
    // Валидация (throws если невалидно)
    validate(initDataRaw, process.env.BOT_TOKEN, { expiresIn: 86400 }); // 24 часа

    // Парсим данные вручную (пакет не парсит, только проверяет подпись)
    const params = new URLSearchParams(initDataRaw);
    const userStr = params.get('user');
    const user = userStr ? JSON.parse(userStr) : null;

    if (!user || !user.id) {
      return res.status(401).json({ error: 'Invalid user data' });
    }

    req.telegramUser = {
      id: user.id,
      first_name: user.first_name,
      username: user.username || null,
      photo_url: user.photo_url || null,
    };

    next();
  } catch (err) {
    console.error('InitData validation failed:', err.message);
    return res.status(401).json({ error: 'Invalid or expired initData' });
  }
};

module.exports = authMiddleware;