const express = require("express");
const app = express();
const PORT = process.env.PORT || 7075;
const path = require("path");
const db = require('./config/connection');
const morgan = require("morgan");

require('dotenv').config();

const routes = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.send("The server is up and running.  You are connected!")
});

app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server is running on PORT ${PORT}.`)
    });
})