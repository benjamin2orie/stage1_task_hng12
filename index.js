


import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './src/Route/api.router.js';

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.use(cors({
    origin: '*',
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use('/api', router);
app.get('/', async(req, res)=>{
    res.send("<h1>404 not found! Please check the url and enter the data in a correct format</h1>")
});



app.listen(port, ()=>{
    console.log(`The server is running on port ${port}`);
    console.log(6%3)
});



export default app;