const { Sequelize } = require("sequelize");
const config = require("../config");

const database = new Sequelize({
  dialect: "postgres",
  host: config.db.host,
  username: config.db.user,
  password: config.db.password,
  database: config.db.dbName,
  ssl: process.env.DB_ENABLE_SSL,
  dialectOptions: {
    ssl: process.env.DB_ENABLE_SSL && {
      require: true
    }
  }
});

module.exports = database;
