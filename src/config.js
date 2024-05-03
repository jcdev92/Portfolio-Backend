require("dotenv").config();

// prod url
const url = process.env.URL_PROD;

// dev url
// const url = process.env.URL_DEV;

const config = {
  url,
  port: process.env.PORT || 9000,
  nodeEnv: process.env.NODE_ENV !== "development",
  jwtSecret: process.env.JWT_SECRET,
  passwordSeeder: process.env.PASS_SEEDER,
  db: {
    dbHost: process.env.DB_HOST || "localhost",
    dbUser: process.env.DB_USER || "root",
    dbPass: process.env.DB_PASS || "xyz",
    dbName: process.env.DB_NAME,
    dbPort: process.env.DB_LOCAL_PORT || 5432,
    dbDialect: process.env.DB_DIALECT || "postgres",
  },
};

module.exports = config;
