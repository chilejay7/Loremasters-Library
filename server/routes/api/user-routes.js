const router = require('express').Router();

const { authMiddleware } = require('../../utils/auth');

const { 
    createUser,
    getUser,
    login, 
} = require('../../controllers/user-controller');

router.route('/').post(createUser).put(authMiddleware);

router.route('/currentUser').get(getUser);

router.route('/login').post(login);

module.exports = router;