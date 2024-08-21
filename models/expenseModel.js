import mongoose from "mongoose";



const expenseSchema = new mongoose.Schema({
    description: { type: String, required: true },
    amount: { type: Number, required: true },
    category: { type: String, required: true }
})


const expenseModel = mongoose.model("expense", expenseSchema)

export default expenseModel