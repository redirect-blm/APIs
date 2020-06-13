const {
  db,
  Business,
  Product,
  ProductCategory,
  ProductOffering,
} = require('../db');
const { data } = require('./staticData');

const seed = async () => {
  const { categories } = data;
  const newCategories = await Promise.all(
    categories.map((_c) => ProductCategory.create({ categoryName: _c }))
  );
};

const startDb = () => {
  // We'll delete all of the data in the db every time we start the server and repopulate it
  return db
    .sync({ force: true })
    .then(() => {
      console.log('DB SYNCED');
      return seed();
    })
    .then(() => {
      console.log('DB SEEDED');
    })
    .catch((e) => {
      console.log('ERROR SYNCING DB');
      console.log(e);
    });
};

module.exports = {
  seed,
  startDb,
};
