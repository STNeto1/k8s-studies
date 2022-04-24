import express from 'express'
import os from 'os'
import fetch from 'node-fetch'

const app = express()
const PORT = 3000

app.use('/nginx', async (_, res) => {
  const response = await fetch('http://nginx')
  const body = await response.text()
  res.send(body)
})

app.use('/', (_, res) => {
  const message = `[V2] - Hello from ${os.hostname()}`
  console.log({ message })
  res.json({ message })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
