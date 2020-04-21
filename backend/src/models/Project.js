const { Sequelize, Model  } = require('sequelize')

class Project extends Model {}
Project.init({
  id: {
    title: Sequelize.STRING,
    allowNull: false,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  owner: {
    type: Sequelize.STRING,
    allowNull: false,
  },
}, { sequelize, modelName: 'project'})

module.exports = new Project()