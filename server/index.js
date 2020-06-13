const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const app = express();
const port = process.env.PORT || 3001;
const { startDb } = require('./utils');

app.use(bodyParser.json());

app.get('/', (_request, response) => {
  response.json({ info: 'Redirect API - Node.js, Express, and Postgres API' });
});


// app.use('/api', routes);
app.use("/api", routes);

// Start DB before starting server
startDb().then(() => {
  app.listen(port, () => {
    console.log(`App running on port ${port}.`);
  });
});


