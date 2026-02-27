exports.getGiveaways = (req, res) => {
  res.status(503).json({
    success: false,
    message: 'Розыгрыши временно недоступны. Раздел в разработке.',
  });
};

exports.participate = (req, res) => {
  res.status(503).json({
    success: false,
    message: 'Участие в розыгрышах пока недоступно.',
  });
};