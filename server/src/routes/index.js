const express = require('express');
const router = express.Router();

// Импортируем роуты (все закомментированы, чтобы не ломалось)
const userRoutes = require('./userRoutes');
// const taskRoutes = require('./taskRoutes');
// const promoRoutes = require('./promoRoutes');
// const referralRoutes = require('./referralRoutes');
// const giveawayRoutes = require('./giveawayRoutes');

// Подключаем только userRoutes (остальные закомментированы)
router.use('/user', userRoutes);

// Остальные роуты пока отключены, чтобы избежать ошибок
// router.use('/tasks', taskRoutes);
// router.use('/promos', promoRoutes);
// router.use('/referrals', referralRoutes);
// router.use('/giveaways', giveawayRoutes);

module.exports = router;