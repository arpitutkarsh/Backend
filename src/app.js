import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express()
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json({limit: '50mb'})) ;
//app.use is a middleware function which is called everytime a request is made to the server
//express.json() is a middleware function which parses incoming requests with JSON payloads
//now we want to take data from url as when we see in the url sometimes there is % in between the urls and for this we use express.urlencoded()
app.use(express.urlencoded());
//now we also want to take data from files, folders like pdfs, images etc so for this we use express.static()
app.use(express.static('public')); //here public is the folder name where we want to store the files
//public is already created in the root directory
//the cookie parser is used to access the and set browser cookies of the user using my server, it is done by using the cookie-parser middleware
app.use(cookieParser());
//this error body-parser deprecated undefined extended: provide extended option file:\C:\Users\Arpit\Desktop\Backend\src\app.js:14:17 i
export {app}

