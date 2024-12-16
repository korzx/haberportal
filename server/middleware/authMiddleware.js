// server/middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'gizli_anahtar_buraya';


const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ error: 'Kimlik doğrulama hatası' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Geçersiz token' });
    }
};

const adminMiddleware = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ error: 'Yetkisiz erişim' });
    }
    next();
};

module.exports = { authMiddleware, adminMiddleware };
