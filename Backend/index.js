const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    // res.send('Kisu')
    res.status(404).json({name:'Kisu'})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
