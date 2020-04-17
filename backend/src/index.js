const express = require('express')
const { uuid } = require('uuidv4') // Biblioteca que gera um id único

const app = express() // Função que cria um server


app.use(express.json()) // Middleware que trata a req baseado no Content-Type header.

const projects = [] // Cria um array de projects

// Busca no log os dados da requisição: método HTTP e url.
function logRequest(req, res, next) {
  const { method, url } = req

  const logLabel = `[${method.toUpperCase()}] ${url}`

  console.log(logLabel)

  return next() // Prossegue para o próximo middleware
}

app.use(logRequest) // Aplica o Middleware em todas as requisições abaixo dele

// Lista os projects
app.get('/projects', (req, res) => {
  const { title } = req.query // Faz o destructuring na req

  // Filtra no projects o title vinda na req
  const results = title
    ? projects.filter(project => project.title.includes(title))
    : projects

  return res.json(results)
})

// Cria um project
app.post('/projects', (req, res) => {
  const { title, owner } = req.body // Destructuring na req

  const project = { id: uuid(), title, owner } // Atribue as propriedades no project

  projects.push(project) // Insere um elemento project no array de projects

  return res.status(201).json(project)
})

// Atualiza um project pelo ID
app.put('/projects/:id', (req, res) => {
  const { id } = req.params // Destructuring no route params
  const { title, owner } = req.body // Destructuring do body

  // Procura e compara o ID que veio na req
  const projectIndex = projects.findIndex(project => project.id === id)

  // Observa-se que o return do if será < 0 quando o ID não foi encontrado
  if (projectIndex < 0) {
    return res.status(404).json({ error: 'Project not found.' })
  }

  const project = { id, title, owner } // Insere as propriedades ao project

  projects[projectIndex] = project // Insere o project no array de projects

  return res.json(project)
})

// Remove o project pelo ID
app.delete('/projects/:id', (req, res) => {
  const { id } = req.params // Destructuring do route params

  const projetcIndex = projects.findIndex(project => project.id === id)

  if (projetcIndex < 0) {
    return res.status(404).json({ error: 'Project not found' })
  }

  projects.splice(projetcIndex, 1) // Utiliza o splice para remover um elemento do array

  return res.status(204).send()
})

// Escuta na porta 3333 e exibe no console a mensagem quando o server sobe.
app.listen(3333, () => console.log('🚀️ Server running...'))