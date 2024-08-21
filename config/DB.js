


import mongoose from "mongoose";


const connectDB = async (DATABASE_URL) => {
    try {
        await mongoose.connect(DATABASE_URL)
        console.log("Datebase is connect successfully")

    } catch (error) {
        console.log(error)

    }
}


export default connectDB