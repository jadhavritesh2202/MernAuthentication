import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import 'dotenv/config';
import connectDB from "./config/mongodb.js";
const app=express();
const port=process.env.port||4000
connectDB();

app.use(express.json())
app.use(cookieParser())
//It allows cookies, sessions, tokens, authentication headers to be sent.
app.use(cors({credentials:true}))

app.listen(port,()=>{
    console.log(`server started on port:${port}`)
})

// API Endpoints
app.get("/", (req, res) => res.send("API Working"));