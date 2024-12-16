const express = require('express');
const router = express.Router();
const connectDB = require('../config/database');

// Admin paneli sayfası
router.get('/dashboard', async (req, res) => {
    const db = await connectDB();
    const user = db.data.users.find(u => u.username === req.body.username);

    if (user && user.role === 'admin') {
        res.sendFile(path.join(__dirname, 'views', 'admin/dashboard.html'));
    } else {
        res.status(403).send('Yetkisiz erişim');
    }
});

module.exports = router;
