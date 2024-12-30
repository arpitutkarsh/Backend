//require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import conncectDB from "./db/index.js";
dotenv.config({path: './env'})

conncectDB()

/*
//this is  the first approach to connect to db
//Here we will be using IIFE function which executes immediately
const app = express()
(async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`) //process.env is used to get variable from .env file
        app.on("error", (error) => {
            console.log("error is: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port number: ${process.env.PORT}`)
        })
    }
    catch(error){
        console.log(error)
    }
})()
*/
