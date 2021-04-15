const Sequelize = require("sequelize");
const con = require("./db");

const answer = con.define("answers", {
    body: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    questionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
});

answer.sync({ force: false });

module.exports = answer;
