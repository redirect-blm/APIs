const db = require('./database');
const {
  Business,
  Product,
  ProductOffering,
  ProductCategory,
} = require("./models/index");



module.exports = {
  db,
  models: {
    Business,
    Product,
    ProductOffering,
    ProductCategory
  }
};