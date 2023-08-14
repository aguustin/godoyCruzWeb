import express from "express";
import fileUpload from "express-fileupload";
import { port } from "./config.js";
import morgan from "morgan";
import { connectionDB } from "./db.js";

connectionDB();
const app = express();

//settings

//middlewares
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended: true}));
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir:'./uploads'
}));
app.use(morgan('tiny'));

//routes

//listen
app.listen(port, console.log(`app running in port: ${port}`))