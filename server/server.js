const express = require("express");
const app = express();
const PORT = process.env.PORT || 7075;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("The server is up and running.  You are connected!")
});

app.listen(PORT, () => {
    console.log(`API server is running on PORT ${PORT}.`)
});