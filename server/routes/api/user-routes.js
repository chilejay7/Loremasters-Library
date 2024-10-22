const router = require('express').Router();

const { 
    getUser,
    login, 
} = require('../../controllers/user-controller');

router.get('/', (req, res) => {
    res.send('Login & user routes are responding!');
});

router.route('/currentUser').get(getUser);

router.route('/login').post(login);

module.exports = router;