// const express = require('express')  // common type

// import express from 'express';  // module type
// const cors = require('cors')
// const app = express()
// const port = 3000

// app.use(cors())
// app.get('/', (req, res) => {
//     // res.send('Kisu')
//     res.status(400).json({name: 'Kisu'})
// })

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })

import express from 'express';
import router from './routes/user.route.js';
const app = express();
const port = 8080;
app.use("/user", router)
app.listen(port);