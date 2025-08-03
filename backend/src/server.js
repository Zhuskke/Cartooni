import express from 'express';
import connectDB from './config/db.js';
import productRouter from './routers/productRouter.js';

const app = express();

app.use(express.json())

app.use("/api/products", productRouter)

connectDB().then(() => {
    app.listen(5001,() => {
        console.log("Your port number is 5001")
})})

