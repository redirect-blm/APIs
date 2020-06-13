const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3001;
const { startDb } = require('./utils');

const businesses = require("./routes/api/businesses");
const categories = require("./routes/api/categories");

app.use(bodyParser.json());

app.get('/', (_request, response) => {
  response.json({ info: 'Redirect API - Node.js, Express, and Postgres API' });
});


// Start DB before starting server
startDb().then(() => {
  app.listen(port, () => {
    console.log(`App running on port ${port}.`);
  });
});

app.use("/api/businesses", businesses);
app.use("/api/categories", categories);