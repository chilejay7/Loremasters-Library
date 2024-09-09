const router = require("express").Router();
const apiRoutes = require("./api");

router.get("/", (req, res) => {
    res.send("API routes are responding!")
});

router.use('/api', apiRoutes);

module.exports = router;