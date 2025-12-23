const JWT = require('jsonwebtoken')

const adminProtect = async (req, res, next) => {
    // REAL-WORLD AUTH: Read token from HTTP-only cookie instead of Authorization header
    // Browser automatically sends cookies with requests - no manual handling needed
    const token = req.cookies?.token;

    if (!token) {
        return res.status(401).json({ message: 'Not authorized' });
    }

    try {
        // Verify and decode the JWT token
        const decoded = JWT.verify(token, process.env.JWT);

        if (decoded.role !== 'admin') {
            return res.status(403).json({ message: 'Forbidden' });
        }

        // Attach admin data to request for use in route handlers
        req.admin = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};


module.exports = adminProtect