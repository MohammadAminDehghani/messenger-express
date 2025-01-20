import mongoose from "mongoose";

export const ConnectMongooDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI!)
        console.log('MongoDB Connected')
    } catch (error) {
        console.log('MongoDB Conection Error: ' + error)
        process.exit(1)
    }
}