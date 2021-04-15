const Sequelize = require("sequelize");
const con = require("./db");

const Question = con.define("questions", {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
});

Question.sync({ force: false }).then(() => {});

module.exports = Question;
