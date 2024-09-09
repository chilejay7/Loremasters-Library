const router = require("express").Router();


router.get("/", (req, res) => {
    res.send("API routes are responding!")
});



module.exports = router;