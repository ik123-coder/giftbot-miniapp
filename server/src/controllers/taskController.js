exports.getTasks = (req, res) => {
  res.status(503).json({
    success: false,
    message: 'Задания временно недоступны. Раздел в разработке.',
  });
};

exports.completeTask = (req, res) => {
  res.status(503).json({
    success: false,
    message: 'Выполнение заданий пока недоступно.',
  });
};