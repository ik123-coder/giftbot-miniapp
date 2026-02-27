const express = require('express');
const router = express.Router();
const { getGiveaways, participate } = require('../controllers/giveawayController');

router.get('/', getGiveaways);
router.post('/participate', participate);

module.exports = router;