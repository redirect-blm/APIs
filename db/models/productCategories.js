const Sequelize = require("sequelize");
const db = require("../database");

// import your datatypes here
const { UUID, UUIDV4, STRING } = Sequelize;

const ProductCategory = db.define("productCategory", {
  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4,
  },
  categoryName: {
    type: STRING,
    allowNull: false,
  }
});

module.exports = ProductCategory;
