import express from "express"
import dotenv from 'dotenv'
import expenceRoute from "./routes/expenseRoute.js"
import connectDB from "./config/DB.js"
dotenv.config()

const app = express()

const port = process.env.PORT || 3000
const databaseUrl = process.env.DATABASE_URL

// middleware

app.use(express.json())
app.use("/api/v1/", expenceRoute)
// connect to database
connectDB(databaseUrl)


// api

app.listen(port, () => {
    console.log(`server is listening at http://localhost:${port}`)
})