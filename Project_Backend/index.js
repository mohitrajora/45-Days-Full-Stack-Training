import express from 'express';
import 'dotenv/config';
import bodyParser from 'body-parser';
import router from '../Project_Backend/routes/product.route.js';
import './database/connection.js'

const app = express();
const port = process.env.PORT;


app.use(bodyParser.json())
app.use("/product", router)

app.use(express.static('uploads'))
app.get("/image", async (req, res) => {
    try {
        let image = req.query;
        image = `${process.env.URL}/${image}`;
        res.status(200).json({
            data: null,
            message: "Product image get successfully!",
            staus: true
        });
    }
    catch (error) {
        res.status(500).json({ data: null, message: error.message, status: false })
    }
})
app.get("/", (req, res) => {
    res.send('hello')
})
app.listen(port, () => console.log(port));