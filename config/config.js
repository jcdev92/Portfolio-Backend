require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASS || "root",
    database: process.env.DB_NAME || "postgres",
    host: process.env.DB_HOST || "localhost",
    dialect: process.env.DB_DIALECT || "postgres",
    port: process.env.DB_PORT || 5432,
  },
};
