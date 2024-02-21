import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI!);
        console.log("Connected to client Database")
    } catch (error) {
        console.log("Problem connecting to kaeyros_attendance_bd Database")
    }
}

export default connectMongoDB