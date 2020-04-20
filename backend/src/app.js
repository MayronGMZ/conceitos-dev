const express = require('express')
const cors = require('cors')

const logRequest = require('./middleware/logRequest')

const routes = require('./routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(logRequest)
app.use(routes)

module.exports = app