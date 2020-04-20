const express = require('express')

const ProjectController = require('./controllers/ProjectController')

const routes = express.Router()

// Lista os projects
routes.get('/projects', ProjectController.index)

// Cria um project
routes.post('/projects', ProjectController.store)

// Atualiza um project pelo ID
routes.put('/projects/:id', ProjectController.update)

// Remove o project pelo ID
routes.delete('/projects/:id', ProjectController.destroy)

module.exports = routes