import express from 'express'
import os from 'os'

const app = express()
const PORT = 3000

app.use('/', (_, res) => {
  const message = `[V2] - Hello from ${os.hostname()}`
  console.log({ message })
  res.json({ message })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
