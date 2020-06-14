const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3001;
const { startDb } = require('./utils');

const businesses = require('./routes/api/businesses');
const categories = require('./routes/api/categories');
const boycottList = require('./routes/api/boycottList');

app.use(bodyParser.json());

app.use((request, response, next) => {
  response.header('Access-Control-Allow-Credentials', true);
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
  response.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization'
  ); //allows for headers with authorization
  if ('OPTIONS' === request.method) {
    response.sendStatus(200);
  } else {
    next();
  }
});

app.get('/', (_request, response) => {
  response.json({ info: 'Redirect API - Node.js, Express, and Postgres API' });
});

// Start DB before starting server
startDb().then(() => {
  app.listen(port, () => {
    console.log(`App running on port ${port}.`);
  });
});

app.use('/api/businesses', businesses);
app.use('/api/categories', categories);
app.use('/api/boycottList', boycottList);
