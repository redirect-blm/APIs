const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const app = express();
const port = 3001;

app.use(bodyParser.json());

app.get('/', (_request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' });
});

app.use('/api', routes);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
