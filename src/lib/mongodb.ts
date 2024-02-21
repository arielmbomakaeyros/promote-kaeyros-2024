import mongoose from "mongoose";
// const MONGODB_URI = "mongodb+srv://promete_user2024:promote_pwd2024@promotedb.gpos36r.mongodb.net/promete_user2024"

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process?.env?.MONGODB_URI!);
        // await mongoose.connect(MONGODB_URI);
        console.log("Connected to client Database")
    } catch (error) {
        console.log("Problem connecting to kaeyros_attendance_bd Database")
    }
}

export default connectMongoDB