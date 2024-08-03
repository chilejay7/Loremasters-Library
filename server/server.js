const express = require("express");
const app = express();
const PORT = process.env.PORT || 7075;
const path = require("path");
const morgan = require("morgan");

const routes = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.send("The server is up and running.  You are connected!")
});

app.listen(PORT, () => {
    console.log(`API server is running on PORT ${PORT}.`)
});