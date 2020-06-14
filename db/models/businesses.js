const Sequelize = require('sequelize');
const db = require('../database');

// import your datatypes here
const { UUID, UUIDV4, STRING, TEXT } = Sequelize;


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
  website: {
    type: STRING,
    allowNull: true,
  },
  description: {
    type: TEXT,
    // validate: {
    //   len: [0, 600],
    // },
    allowNull: false,
  },
  source: {
    type: STRING,
    allowNull: true,
  },
  category: {
    type: STRING,
    allowNull: true,
  },
  shortDescription: {
    type: STRING,
    allowNull: true,
  },
});

module.exports = Business;
