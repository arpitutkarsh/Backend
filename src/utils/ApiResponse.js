class ApiResone{
    constructor(
        statusCode,data,message = "Success"
    ){
        this.statusCode = statusCode //status code is the code which is sent to the user example: 200, 404, 500 etc
        this.data = data //data is the data which is sent to the user example : user data, post data etc
        this.message = message //message is the message which is sent to the user example: Success, Error etc
        this.success = statusCode < 400  //if the status code is less than 400 then the success will be true else it will be false
    }
}