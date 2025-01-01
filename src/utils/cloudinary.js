import {v2 as cloudinary} from "cloudinary"
import fs from "fs" //fs is our file system which is by-default availble in npm. It helps in reading, writing and everything related to file

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});
//code to upload the file on cloudinary
const uploadonCloudinary = async (localFilePath) => { //async function to upload the file on cloudinary as it will take some time to upload the file
    try{
        //if there is no local file path then simply return null as we dont know what to do next
        if(!localFilePath) return null
        //upload the file on cloudinary
        const respone = await cloudinary.uploader.upload(localFilePath,{
            resource_type: "auto"
        })
        //now the file has beeen uploaded successfully 
        console.log("File Upload on cloudinary is  Successfull ", respone.url);
        return respone;
    }
    catch(error){
        //Now we know one thing is ki hmlog ke local file mein ye store ho gya hai, and now we have to delete it as it may contain malware etc
        fs.unlinkSync(localFilePath) //remove the locally saved temporary file as the upload operation got failed 
        return null;
    }
}

export {uploadonCloudinary};