const Sequelize = require("sequelize");
const db = require("../database");

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
    type: TEXT,
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