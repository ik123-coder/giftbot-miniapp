const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getProfile, updateBalance } = require('../controllers/userController');

router.get('/profile', auth, getProfile);
router.post('/balance', auth, updateBalance);

module.exports = router;