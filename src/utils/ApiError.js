class ApiError extends Error { //here we are creating a class ApiError which extends Error class and extends means that the class ApiError will inherit all the properties and methods of the Error class and Error class is a built-in class in JavaScript
    constructor(statusCode, //here we are creating a constructor which is taking four parameters statusCode, message, errors and stack
        message = "Something went wrong", //here we are setting the default value of the message parameter which is "Something went wrong"
        errors = [], //here we are setting the default value of the errors parameter which is an empty array error parameter is used to store the errors
        stack = "" //here we are setting the default value of the stack parameter which is an empty string
    ) {
        super(message) //Super keyword is used to access and call functions on an object's parent. Here we are calling the constructor of the parent class which is Error class
        this.statusCode = statusCode //here we are setting the value of the statusCode parameter to the statusCode property of the class
        this.data = null
        this.message = message
        this.success = false
        this.errors = errors
        
    }
}
//As we have created Api Error now we will create for Api Response in a new file in utils folder named as ApiResone.js
export {ApiError}