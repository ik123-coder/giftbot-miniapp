const express = require('express');
const router = express.Router();
const { getTasks, completeTask } = require('../controllers/taskController');

router.get('/', getTasks);
router.post('/complete', completeTask);

module.exports = router;