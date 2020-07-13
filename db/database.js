// If you're using Windows OS in development, you need to save your postgres username and password in your local .env file before starting the app
const Sequelize = require('sequelize');
const dotenv = require('dotenv').config().parsed;
const platform = process.env.PLATFORM ? process.env.PLATFORM.trim() : null
const connectionString = platform === 'windows' ? `postgres://${dotenv.PSQL_USER}:${dotenv.PSQL_PW}@127.0.0.1:5432/twitchtrivia` : `postgres://localhost:5432/twitchtrivia`;
const dbUrl =
process.env.DATABASE_URL || connectionString;
const db = new Sequelize(dbUrl,
  {
    logging: false,
  }
);

module.exports = db;
