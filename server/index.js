import express from "express"
import cors from "cors"
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();

const app = express()

app.use (express.json())
app.use (cors())

const PORT = process.env.PORT || 5000

app.listen (PORT ,()=>{
    console.log (`server is running on port ${PORT}`)
})