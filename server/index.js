const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3001;
const { startDb, logRequest } = require('./utils');

app.use(bodyParser.json());

app.use((request, response, next) => {
  logRequest(request);
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

app.use('/api', require('./api'));

app.get('/', (_request, response) => {
  response.json({ info: 'Redirect API - Node.js, Express, and Postgres API' });
});

if (process.env.MODE && process.env.MODE.trim() === 'nodatabase') {
  console.log('starting app with no database')
  app.listen(port, () => {
    console.log(`App running on port ${port} without database.`);
  });
} else {
  console.log('starting database')
  startDb().then(() => {
    app.listen(port, () => {
      console.log(`App running on port ${port}.`);
    });
  });
}