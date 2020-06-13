// This is the standard databse declaration for Mac OS. Not that this will break in Windows OS, where password is required
// You will need to create a postgreSQL database on your local machine named redirect
const Sequelize = require('sequelize');
const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost:5432/redirect',
  {
    logging: false
  }
);

module.exports = db;
