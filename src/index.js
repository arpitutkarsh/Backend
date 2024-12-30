//require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import {app} from "./app.js"
dotenv.config({path: './env'})

connectDB().
then(() => {
    app.on("error", (error) => {
        console.log("Error is: ", error)
        throw error
    })
}).then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port: ${process.env.PORT}`)

    })  
})
.catch((error) => {
    console.log("MongoDB Connection failed!!!", error)
})

//we know that we have to connect to the database first and then we have to start the server
//we also know that we will be using database throughout in our application and therefore we will be using utility file to write the code for connecting to the database
//to do this we will create a file asyncHandler.js in utils folder











































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
