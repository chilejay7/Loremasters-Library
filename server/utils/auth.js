const jwt = require('jsonwebtoken');
const secret = require('dotenv').config();
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

const signToken = ({ username, email, _id }) => {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
}

module.exports = { authMiddleware, signToken };


