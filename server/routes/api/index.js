const router = require("express").Router();
const users = require('./user-routes');
const books = require('./book-routes');

router.get("/", (req, res) => {
    res.send("API routes are responding!")
});

router.use('/users', users);

router.use('/books', books);

module.exports = router;