const Sequelize = require('sequelize');
const db = require('../database');

// import your datatypes here
const { UUID, UUIDV4, STRING } = Sequelize;


const Business = db.define("business", {
  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4,
  },
  // put all of the columns for businesses here
  businessName: {
    type: STRING,
    allowNull: false,
  },
  type: {
    type: STRING,
    allowNull: false,
  },
  description: {
    type: STRING,
    validate: {
      len: [0,500],
      notNull: true
    }, 
  },
  source: {
    type: STRING,
    allowNull: true,
  },
});

module.exports = Business;
