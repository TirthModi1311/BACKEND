import express from "express";
import { dbconnection } from "./database/dbconnection.js";
import dotenv from "dotenv";
import messageRouter from "./Routers/messageRouter.js";
import cors from 'cors'
const app = express();

dotenv.config({path:"./config/.env"});

//connection with BACKEND WITH FRONTEND
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["POST"],
    credentials:true,
}))

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/v1/message",messageRouter); //creating a new message in the database

dbconnection();



export default app;