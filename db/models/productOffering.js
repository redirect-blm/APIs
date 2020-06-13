const Sequelize = require("sequelize");
const db = require("../database");

// import your datatypes here
const { UUID, UUIDV4, STRING } = Sequelize;

const ProductOffering = db.define("productOffering", {
  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4,
  },
});

module.exports = ProductOffering;