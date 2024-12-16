const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const { authMiddleware, adminMiddleware } = require('./server/middleware/authMiddleware');

const app = express();
const PORT = process.env.PORT || 3001;



// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


// Dashboard sayfası, sadece admin erişimine açık
app.get('/dashboard', authMiddleware, adminMiddleware, (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'admin/dashboard.html'));
});

// Kullanıcıları ana sayfaya yönlendirme
app.get('/home', authMiddleware, (req, res) => {
    if (req.user.role === 'user') {
        res.sendFile(path.join(__dirname, 'views', 'home.html')); // home.html dosyasına yönlendir
    } else {
        res.status(403).send("Yetkisiz erişim");
    }
    if (user.role === 'admin') {
        window.location.href = '/dashboard';
    } else {
        window.location.href = '/home';
    }
    
});



// Rotalar
const authRoutes = require('./server/routes/authRoutes'); // Kullanıcı yetkilendirme
const contentRoutes = require('./server/routes/contentRoutes');

app.use('/api/auth', authRoutes); // Giriş/Kayıt işlemleri
app.use('/api/content', contentRoutes);

// Sayfa Yönlendirmeleri
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views', 'index.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'views', 'login.html')));
app.get('/register', (req, res) => res.sendFile(path.join(__dirname, 'views', 'register.html')));
app.get('/dashboard', (req, res) => res.sendFile(path.join(__dirname, 'views', 'admin/dashboard.html')));


// Hata yakalama
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Bir şeyler yanlış gitti!');
});

// Sunucu dinleme
app.listen(PORT, () => console.log(`Sunucu ${PORT} portunda çalışıyor`));
