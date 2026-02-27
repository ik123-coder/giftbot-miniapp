const express = require('express');
const router = express.Router();
const { getReferrals, getReferralLink } = require('../controllers/referralController');

router.get('/', getReferrals);
router.get('/link', getReferralLink);

module.exports = router;