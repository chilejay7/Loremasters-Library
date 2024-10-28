const jwt = require('jsonwebtoken');
const secret = SERVER_SECRET;
const expiration = '4h';

const authMiddleware = (req, res, next) => {
    let token = req.query.token || req.headers.authorization;
}




