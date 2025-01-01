We are creating a public folder and inside it we will create a new file temp
Nodemon restarts the file just at the momemt we save it
# Creating a DB Connection
### For data base connection we will be using MongoDB Atlas, steps are:-
1. Go to MongoDB Atlas (it is a sub service of MongoDB where they give online database)
2. Create a new project
3. CLick on Create Deployment
4. Go to Security option
5. Then go to Network Access and delete all existing IP if only yours IP is there and then click on Allow All Access
6. Now click on DataBase Access
7. Now open VS code and go to .env file and write 
    1. PORT = 8000
    2. MONGODB_URI and now copy the credential 
8. Now first we have to name the dATABASE and for this go to constant file and write the database name using syntax 

    export const DB_NAME = "videotube"


[Model LINK](https://drive.google.com/file/d/1myGJb7KODpgnpwTZ3jaFmdYKWYMWHXRC/view?usp=sharing)

# HOW TO UPLOAD FILES IN BACKEND
For file uploading services we will be using Cloudinary. We will also be using packages like express fileupload or multer(we will be using multer here). We will be using multer to store the file in the local folder and then we will use cloudinary to store it from local to cloudinary. 

Now go to utils folder and create a new file cloudinary.js and write the below code
```
import {v2 as cloudinary} from "cloudinary"
import fs from "fs"
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});
const uploadonCloudinary = async (localFilePath) => {
    try{
        if(!localFilePath) return null
        const respone = await cloudinary.uploader.upload(localFilePath,{
            resource_type: "auto"
        })
        console.log("File Upload on cloudinary is  Successfull ", respone.url);
        return respone;
    }
    catch(error){
        fs.unlinkSync(localFilePath)
        return null;
    }
}
export {uploadonCloudinary};
```
Now we will create a middle ware using multer
