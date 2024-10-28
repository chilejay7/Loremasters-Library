const jwt = require('jsonwebtoken');
const secret = SERVER_SECRET;
const expiration = '4h';

const authMiddleware = (req, res, next) => {
    let token = req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
        token = token.split(' ').pop().trim();
    }

    if (!token) {
        return res.status(400).json({ message: 'No auth token associated with your current session.' });
    }

    try {
        const { data } = jwt.verify(token, secret, { maxAge: expiration });
        req.user = data;
    } catch {
        console.log('Invalid token');
        return res.status(400).json({ message: 'invalid token' });
    }

    next();
}




