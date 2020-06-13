const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
// const db = require("./frontend/src/config/keys").mongoURI;

app.get("/", (req, res) => {
    res.send("Redire¢t coming very very Soon!");
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server all set ${port}`));