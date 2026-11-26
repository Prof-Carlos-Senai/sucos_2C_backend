const { Sequelize } = require('sequelize')

const db = new Sequelize('a','root','root',{
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
})

module.exports = db