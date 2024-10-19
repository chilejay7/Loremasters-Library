const router = require('express').Router();

const { getUser } = require('../../controllers/user-controller');

router.get('/', (req, res) => {
    res.send('Login & user routes are responding!');
});

router.route('/currentUser').get(getUser);

module.exports = router;