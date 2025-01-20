import express from "express";
import { ConnectMongooDb } from "./config/database";
import { connectRedis } from "./config/redis";
import dotenv from 'dotenv';


dotenv.config();

const app = express();

app.use(express.json())

const startServer = async () => {
    
    await ConnectMongooDb();
    await connectRedis();

    app.listen(5000, ()=>{
        console.log('Server running on http://localhost:5000')
    })
}

startServer();
