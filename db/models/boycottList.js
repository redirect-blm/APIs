const Sequelize = require("sequelize");
const db = require("../database");

// import your datatypes here
const { UUID, UUIDV4, STRING, TEXT } = Sequelize;

const BoycottList = db.define("boycottList", {
  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4,
  },
  businessName: {
    type: STRING,
    allowNull: false,
  },
  reason: {
    type: STRING,
    allowNull: false,
  },
  source: {
    type: STRING,
    allowNull: true,
  },
  sourceUrl: {
    type: STRING,
    allowNull: true,
  },
  sourceDate: {
    type: TEXT,
    allowNull: false,
  },
});

module.exports = BoycottList;