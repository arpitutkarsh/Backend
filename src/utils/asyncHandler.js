const asyncHandler = (requestHandler) => { //here we are creating a function asyncHandler which is taking a function as an argument
    (req, res, next) => { //this function is taking three parameters req, res, next where req is the request object, res is the response object and next is used to call the next middleware function
        Promise.resolve(requestHandler(req, res, next)) //here we are resolving the promise which is returned by the requestHandler function we are using Promise.resolve() to resolve the promise
        .catch((error) => next(error)) //if there is an error then we will catch it here and then we will call the next middleware function
    } 

}

export {asyncHandler}
//now we want a very standardized way to handle the errors in the application and for this we will be reating a new file in the utils folder called apiError.js
//the syntax of the file will be in the same folder
//async handler is a higher order function is a function that takes a function as an argument or returns a function
// const asyncHandler = (fn) => {} //this is step 1
//const asyncHandler = (fn) => {() => {}} //this is step 2
//and below is the final step
/*

here we are using try catch block to catch the error and then we are sending the error message to the user
const asyncHandler = (fn) => async (req, res, next) => ( //in this line we are using async function which is taking three parameters req, res, next. next is used to call the next middleware function
    try { 
        await fn(req, res, next) //here we are calling the function which is passed as an argument to asyncHandler
    } catch (error) { //if there is an error then we will catch it here
        res.status(error.code || 500).json({ //we are sending the status code and the error message to the user
            success: false,
            message: error.message //error message is sent to the user
        })
    }
) 
*/