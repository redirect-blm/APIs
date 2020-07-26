// If you're using Windows OS in development, you need to save your postgres username and password in your local .env file before starting the app
const Sequelize = require('sequelize');
const dotenv = require('dotenv').config().parsed;

/***** 2 DATABSE CONNECTION OPTIONS *****/
//1 
   // USE THIS FOR CONNECTING TO YOU LOCAL VERSION OF THE DB
   // const platform = process.env.PLATFORM ? process.env.PLATFORM.trim() : null
   // const localConnectionString = platform === 'windows' ? `postgres://${dotenv.PSQL_USER}:${dotenv.PSQL_PW}@127.0.0.1:5432/redirect` : `postgres://localhost:5432/redirect`;

//2
   // USE THIS FOR CONNECTING TO THE PRODUCTION DB IN HEROKU
   const herokuConnectionString = dotenv && `postgres://${dotenv.DB_USER}:${dotenv.DB_PW}@${dotenv.DB_HOST}:${dotenv.DB_PORT}/${dotenv.DB_NAME}`

/******* *******/

const dbUrl =
process.env.DATABASE_URL || herokuConnectionString;
const db = new Sequelize(dbUrl,
  {
    logging: false,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
  }
);

module.exports = db;
