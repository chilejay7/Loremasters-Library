const router = require("express").Router();
const login = require('./login');

router.get("/", (req, res) => {
    res.send("API routes are responding!")
});

router.use('/login', login);

module.exports = router;