import express from "express";
import dotenv from 'dotenv';

import fibonacciMiddleware from './middlewares/fibonacciMiddleware.js';

dotenv.config();
const app = express();

app.use(express.json());

app.post('/fibonacci', fibonacciMiddleware, (req, res) => {
    res.json({ fibonacci: req.fibonacci });
    console.log(req.fibonacci);
});

app.get('/',(req, res) => {
    res.status(200).send('Hello World!');
});


app.listen(process.env.PORT, () => {
    console.log(`${process.env.MESSAGE_SERVER}: ${process.env.PORT}`);
    })


