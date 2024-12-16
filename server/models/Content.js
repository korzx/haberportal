const db = require('../config/database');

class Content {
    static async create(userId, title, content, category) {
        const [result] = await db.query(
            'INSERT INTO contents (user_id, title, content, category, status) VALUES (?, ?, ?, ?, ?)',
            [userId, title, content, category, 'pending']
        );
        return result;
    }

    static async findAll() {
        const [rows] = await db.query('SELECT * FROM contents WHERE status = "approved"');
        return rows;
    }
}

module.exports = Content;