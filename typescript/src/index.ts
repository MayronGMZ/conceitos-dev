import express from 'express'

import { User } from './routes'

const app = express()

app.get('/', User)

app.listen(3333)