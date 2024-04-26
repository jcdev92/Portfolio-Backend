require("dotenv").config();

const config = {
  url: process.env.URL,
  port: process.env.PORT || 9000,
  nodeEnv: process.env.NODE_ENV !== "development",
  jwtSecret: process.env.JWT_SECRET,
  db: {
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASS || "xyz",
    dbName: process.env.DB_NAME,
  },
};

module.exports = config;
