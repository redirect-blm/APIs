const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();


let db = new Sequelize("database", "username", "password", {
  host: "localhost",
  dialect: "postgres",

  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },

});


// DB test 
db.Authenticate()
    .then( () => console.log("connection working!!!"))
    .catch(err => console.log(err))

app.get("/", (req, res) => {
    res.send("Redire¢t coming very very Soon!");
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server all set ${port}`));