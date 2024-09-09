const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Login routes landing')
});

module.exports = router;