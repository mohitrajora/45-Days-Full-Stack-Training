const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

// Get 
app.get('/', (req, res) => {
    res.status(400).json({ name: 'Kisu' })
})

// Post
app.post('/', (req, res) => {
    res.status(400).json({ name: 'Kisu' })
})

// Put
app.put('/', (req, res) => {
    res.status(400).json({ name: 'Kisu' })
})

// Delete
app.delete('/', (req, res) => {
    res.status(400).json({ name: 'Kisu' })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})