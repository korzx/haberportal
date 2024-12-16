const express = require('express');
const router = express.Router();
const contentController = require('../controllers/contentController');
const { authMiddleware } = require('../middleware/authMiddleware');

router.post('/create', authMiddleware, contentController.createContent);
router.get('/all', contentController.getAllContents);

module.exports = router;