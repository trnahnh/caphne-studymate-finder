import express from 'express'

const app = express()
const PORT = process.env.PORT

app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'Hello from express' })
})

app.listen(PORT, () => {
  console.log(`Server running on port`, PORT)
})