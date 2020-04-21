const Sequelize = require('sequelize')

const conn = new Sequelize('database', 'username', 'password', {
  dialect: 'postgres',
  host: 'localhost:5432'
})

module.exports = conn