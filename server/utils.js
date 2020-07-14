const {
  Business,
  Product,
  ProductCategory,
  ProductOffering,
  BoycottList,
} = require("../db/models");

const { db } = require('../db');
 
const { data } = require('./staticData');
const { boycottListData } = require("./boycottList");

const seed = async () => {
  const { categories } = data;
  const newCategories = await Promise.all(
    categories.map((_c) => ProductCategory.create({ categoryName: _c }))
  );

  const { businesses } = data;
  const newBusiness = await Promise.all(
    businesses.map((_business) =>
      Business.create({
        businessName: _business[0],
        type: _business[1],
        website: _business[2],
        description: _business[3],
        source: _business[4],
        category: _business[5],
        shortDescription: _business[6],
      })
    )
  );

  const { boycottList } = boycottListData;
  const newBoycottList = await Promise.all(
    boycottList.map((_business) =>
      BoycottList.create({
        businessName: _business.businessName,
        reason: _business.reason,
        source: _business.source,
        sourceUrl: _business.sourceUrl,
        sourceDate: _business.sourceDate,
      })
    )
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

const logRequest = (request) => {
  const { method, url, body, params } = request;
  console.log(
    `received ${method} request at ${url} with body = ${JSON.stringify(body)}\nparams = ${JSON.stringify(params)}`
  );
};


module.exports = {
  seed,
  startDb,
  logRequest
};
