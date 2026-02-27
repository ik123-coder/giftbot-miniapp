const express = require('express');
const router = express.Router();

const userRoutes = require('./userRoutes');
const taskRoutes = require('./taskRoutes');
const promoRoutes = require('./promoRoutes');
const referralRoutes = require('./referralRoutes');
const giveawayRoutes = require('./giveawayRoutes');

router.use('/user', userRoutes);
router.use('/tasks', taskRoutes);
router.use('/promos', promoRoutes);
router.use('/referrals', referralRoutes);
router.use('/giveaways', giveawayRoutes);

module.exports = router;