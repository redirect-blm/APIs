const db = require('./database');
const {
    Business
  } = require('./models/index');

  module.exports = {
    db,
    models: {
      Business
    }
  };