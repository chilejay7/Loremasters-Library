const router = require("express").Router();
const apiRoutes = require("./api");
const login = require('./login.js');

router.get("/", (req, res) => {
    res.send("API routes are responding!")
});

router.use('/login', login);

router.use('/api', apiRoutes);

module.exports = router;