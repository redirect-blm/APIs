const Sequelize = require('sequelize');
const db = require('../database');

// import your datatypes here
const { UUID, UUIDV4 } = Sequelize;

const Business = db.define('business', {
  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4
  },
  // put all of the columns for businesses here
});

module.exports = Business;
