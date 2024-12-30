import mongoose, { trusted } from "mongoose"; //As we need mongoose therefore we are importing it 
import { DB_NAME } from "../constants.js"; //we also need DB_NAME from constants.js file therefore we are also importing it
//Database is alway in another continent and to fetch it, it takes too much time therefore we need async function

const connectDB = async() => {
    //while connecting database it is possible that we might encounter an error therefore we will be using try catch blow
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB Connected !! DB HOST: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MONGODB connection error:", error);
        //The process.exit() method instructs Node.js to terminate the process synchronously with an exit status of code. If code is omitted, exit uses either the 'success' code 0 or the value of process.exitCode if it has been set. Node.js will not terminate until all the 'exit' event listeners are called.
        //process.exit() will force the process to exit as quickly as possible even if there are still asynchronous operations pending that have not yet completed fully, including I/O operations to process.stdout and process.stderr.

        process.exit(1)
        
    }
}

export default connectDB