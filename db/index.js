const db = require('./database');
const {
  Business,
  Product,
  ProductOffering,
  ProductCategory,
  BoycottList,
} = require("./models/index");

Product.belongsTo(ProductCategory);
ProductCategory.hasMany(Product);

Product.belongsToMany(Business, {through: "ProductOffering" });
Business.hasMany(Product);

module.exports = {
  db,
  models: {
    Business,
    Product,
    ProductOffering,
    ProductCategory,
    BoycottList,
  },
};
