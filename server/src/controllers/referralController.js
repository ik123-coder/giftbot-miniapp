exports.getReferrals = (req, res) => {
  res.status(503).json({
    success: false,
    message: 'Реферальная система временно недоступна.',
  });
};

exports.getReferralLink = (req, res) => {
  res.status(503).json({
    success: false,
    message: 'Генерация реферальной ссылки пока недоступна.',
  });
};