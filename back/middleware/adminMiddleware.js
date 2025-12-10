const JWT = require('jsonwebtoken')

const adminProtect = async (req, res, next) => {
    const header = req.headers.authorization;

    if (!header || !header.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Not authorized' });
    }

    const token = header.split(' ')[1];

    try {
        const decoded = JWT.verify(token, process.env.JWT);

        if (decoded.role !== 'admin') {
            return res.status(403).json({ message: 'Forbidden' });
        }

        req.admin = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};


module.exports = adminProtect