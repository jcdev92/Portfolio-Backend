const { Sequelize } = require("sequelize");
const config = require("../config");

const database = new Sequelize({
  dialect: "postgres",
  host: config.db.host,
  username: config.db.user,
  password: config.db.password,
  database: config.db.dbName,
  dialectOptions: {
    ssl: {
      "require": true,
      "rejectUnauthorized": false 
    },
    native:true
  }
});

module.exports = database;
