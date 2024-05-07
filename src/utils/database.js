const { Sequelize } = require("sequelize");
const config = require("../config");
const {dbHost, dbUser, dbName, dbPort, dbPass, dbDialect} = config.db;

const database = new Sequelize({
  dialect: dbDialect,
  host: dbHost,
  username: dbUser,
  password: dbPass,
  database: dbName,
  port: Number(dbPort),
  // dialectOptions: {
  //   ssl: {
  //     "require": true,
  //     "rejectUnauthorized": false 
  //   },
  //   native:true
  // }
});

module.exports = database;
