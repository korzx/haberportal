// server/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');
const authController = require('../controllers/authController');

router.post('/register', authController.register);
router.post('/login', authController.login);

// Admin dashboard'a sadece admin kullanıcılar erişebilir
router.get('/dashboard', authMiddleware, adminMiddleware, (req, res) => {
    res.send("Admin Dashboard");
});

module.exports = router;
