const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    try {
        // Get token from header
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

        if (!token) {
            return res.status(401).json({ error: 'Access token required' });
        }

        // Verify token
        jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key-change-this', (err, decoded) => {
            if (err) {
                return res.status(403).json({ error: 'Invalid or expired token' });
            }

            // Attach user info to request
            req.user = decoded;
            next();
        });
    } catch (err) {
        console.error('Auth middleware error:', err);
        return res.status(500).json({ error: 'Server error during authentication' });
    }
};

module.exports = { authenticateToken };
