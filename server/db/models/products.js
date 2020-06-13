const Sequelize = require("sequelize");
const db = require("../database");

// import your datatypes here
const { UUID, UUIDV4, STRING } = Sequelize;

const Product = db.define("product", {
  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4,
  },
  productType: {
      type: STRING,
      allowNull: false,
  }
});

module.exports = Product;
