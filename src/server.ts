import express from 'express'
import { applicationPort } from './config'
import { router } from './routes'

const app = express()

app.use(express.json())

app.use(router)

app.listen(applicationPort.port, () =>
  console.log(`🚀 REST API server ready at: http://localhost:${applicationPort.port}`)
)
