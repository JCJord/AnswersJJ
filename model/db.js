const Sequelize = require("sequelize");
const connection = new Sequelize(
    "heroku_45c2d39eeaa6588",
    "b46a39d790a321",
    "d0d5c7fd",
    {
        host: "us-cdbr-east-03.cleardb.com",
        dialect: "mysql",
    }
);

module.exports = connection;
