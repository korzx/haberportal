const jwt = require('jsonwebtoken'); // JWT modülünü dahil et
const bcrypt = require('bcrypt');
const db = require('../config/database'); // Veritabanı bağlantısını dahil et


// Kullanıcı kaydı fonksiyonu
exports.register = (req, res) => {
    const { username, email, password } = req.body;

    // Varsayılan olarak kullanıcı rolü 'user' olarak atanacak
    const role = 'user'; // Bu satırı değiştirebilirsiniz, örneğin admin için 'admin' rolü verebilirsiniz.

    // Veritabanına kullanıcıyı ekleyin
    // Kullanıcıyı veritabanına ekleme
    db.run(`
        INSERT INTO users (username, email, password, role) 
        VALUES (?, ?, ?, ?)
    `, [username, email, password, 'user'], function(err) {
        if (err) {
            return res.status(500).json({ message: "Kayıt sırasında hata oluştu", error: err.message });
        }
        res.status(200).json({ message: "Kullanıcı başarıyla kaydedildi", userId: this.lastID });
    });
};


// Kullanıcı girişi fonksiyonu
exports.login = (req, res) => {
    const { email, password } = req.body;

    // Veritabanından kullanıcıyı al
    db.get('SELECT * FROM users WHERE email = ?', [email], (err, row) => {
        if (err) {
            return res.status(500).json({ message: "Giriş sırasında hata oluştu", error: err.message });
        }
        if (!row) {
            return res.status(400).json({ message: "Geçersiz kullanıcı adı veya şifre" });
        }
    
        // Şifreyi düz metin karşılaştırma
        if (row.password !== password) {
            return res.status(400).json({ message: "Geçersiz kullanıcı adı veya şifre" });
        }
    
        // Token oluşturma
        const token = jwt.sign({ id: row.id, role: row.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ message: "Giriş başarılı", token });
    });
    

    console.log(req.body); // Girişten önce doğru parametrelerin gönderildiğinden emin olmak için


    
};
