import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB)
        console.log("DB connected successfully");
    } catch (error) {
        console.error("Failed to connect database", error)
    }
}

export default connectDB