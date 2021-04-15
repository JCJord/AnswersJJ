const Sequelize = require('sequelize')
const connection = new Sequelize('jjanswers', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
})

module.exports = connection
