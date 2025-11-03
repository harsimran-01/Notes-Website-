import express from "express"
import notesRoute from "./routes/notesRoute.js"
import {connectDB} from "./config/db.js"
import dotenv from "dotenv"
dotenv.config();

// console.log(process.env.MONGO_URI)
connectDB()
const app = express()
app.use(express.json())
app.use("/api/notes",notesRoute);


app.listen(5001,()=>{
    console.log("Server Started")
})

