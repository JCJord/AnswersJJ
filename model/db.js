const Sequelize = require("sequelize");
const connection = new Sequelize("jjanswers", "b46a39d790a321", "d0d5c7fd", {
    host: "us-cdbr-east-03.cleardb.com",
    dialect: "mysql",
});

module.exports = connection;
