function ensureAuthenticated(req, res, next) {
    if (req.session && req.session.user) {
        return next();
    } else {
        return res.status(401).send('Erişim reddedildi. Giriş yapmanız gerekiyor.');
    }
}

function ensureAdmin(req, res, next) {
    if (req.session && req.session.user && req.session.user.role === 'admin') {
        return next();
    } else {
        return res.status(403).send('Yalnızca yöneticiler bu sayfaya erişebilir.');
    }
}

module.exports = { ensureAuthenticated, ensureAdmin };
