import express from 'express';
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.status(400).json({ name: 'Kisu' })
})

app.listen(port);