const sqlite3 = require('sqlite3').verbose(); // SQLite modülünü dahil et

// Veritabanı dosyasını doğru yoldan başlatmak
const dbPath = './server/db/haberportal.db'; // Burada dosyanın yolu belirtiliyor
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error("Veritabanı bağlantısı başarısız:", err.message);
    } else {
        console.log('Veritabanına başarıyla bağlanıldı');
    }
});

// Kullanıcı tablosu oluşturma (role sütunuyla birlikte)
db.run(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        email TEXT NOT NULL,
        password TEXT NOT NULL,
        role TEXT DEFAULT 'user',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
`, (err) => {
    if (err) {
        console.error("Tablo oluşturulamadı:", err.message);
    } else {
        console.log("Tablo başarıyla oluşturuldu");
    }
});



// Veritabanı bağlantısını dışarıya aktar
module.exports = db;
