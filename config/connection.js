const path = require("path");
const Sequelize = require("sequelize");
require("dotenv").config({ path: path.resolve(__dirname, "../.env")});

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: "localhost",
        dialect: "mysql",
        dialectOptions: {
          decimalNumbers: true,
        },
        port: 3306,
      }
    );

module.exports = sequelize;
