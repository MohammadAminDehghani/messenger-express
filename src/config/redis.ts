import { createClient } from "redis";


const redisClient = createClient();

redisClient.on('error', (err) => { console.log('redis error is ' + err) })

export const connectRedis = async () => {
    await redisClient.connect();
    console.log('Redis Connected!')
}

export default redisClient;