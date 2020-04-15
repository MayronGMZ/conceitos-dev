const express = require('express')
const { uuid } = require('uuidv4')

const app = express()

app.use(express.json())

const projects = []

app.get('/projects', (req, res) => {

  return res.json(projects)
})

app.post('/projects', (req, res) => {
  const { title, owner } = req.body

  const project = { id: uuid(), title, owner }

  projects.push(project)

  return res.status(201).json(project)
})

app.put('/projects/:id', (req, res) => {
  const { id } = req.params
  const { title, owner } = req.body

  const projectIndex = projects.findIndex(project => project.id === id)

  if (projectIndex < 0) {
    return res.status(404).json({ error: 'Project not found.' })
  }

  const project = { id, title, owner }

  projects[projectIndex] = project

  return res.json(project)
})

app.delete('/projects/:id', (req, res) => {
  const { id } = req.params

  const projetcIndex = projects.findIndex(project => project.id === id)

  if (projetcIndex < 0) {
    return res.status(404).json({ error: 'Project not found' })
  }

  projects.splice(projetcIndex, 1)

  return res.status(204).send()
})

app.listen(3333, () => console.log('🚀️ Server running...'))