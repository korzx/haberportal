const Content = require('../models/Content');

exports.createContent = async (req, res) => {
    try {
        const { title, content, category } = req.body;
        const userId = req.user.id;

        const result = await Content.create(userId, title, content, category);
        res.status(201).json({ 
            message: 'İçerik oluşturuldu', 
            contentId: result.insertId 
        });
    } catch (error) {
        res.status(500).json({ error: 'İçerik oluşturma hatası' });
    }
};

exports.getAllContents = async (req, res) => {
    try {
        const contents = await Content.findAll();
        res.json(contents);
    } catch (error) {
        res.status(500).json({ error: 'İçerikleri getirme hatası' });
    }
};