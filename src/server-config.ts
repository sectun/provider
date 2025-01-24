import cors from 'cors'
import express, { json } from 'express'

const server = express()
server.use(
  cors({
    origin: 'http://localhost:3000' //allow only requests from this domain
  })
)

server.use(json())

server.get('/', (_, res): void => {
  res.status(200).json({ message: 'Server is running' })
})

server.use('/auth/fake-token', (_, res) => {
  const token = `Bearer ${new Date().toISOString()}`
  return res.status(200).json({ token, status: '200' })
})

export { server }
