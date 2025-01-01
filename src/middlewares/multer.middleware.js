import multer from 'multer' //here we are importing multer, multer is a middleware that is used to upload files

const storage = multer.diskStorage({//here we are creating a storage object which is used to store the files. multer.diskStorage is used to store the files on the disk and multer.memoryStorage is used to store the files in memory
    destination: function(req, file, cb){ //here we are creating a destination function which is taking three parameters req, file, cb. req is the request object, file is the file object and cb is the callback function.
        cb(null, "./Public/temp") //we are passing null because there is no error and we are passing the path where we want to store the file 
    },
    filename: function(req, file, cb){ //here we are creating a filename function which is taking three parameters req, file, cb. req is the request object, file is the file object and cb is the callback function.
        //const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9)
        //cb(null, file.fieldname + "-" + uniqueSuffix)
        cb(null, file.originalname) //we are passing null because there is no error and we are passing the original name of the file
    }
})

export const upload = multer({ storage, }) //here we are creating an upload object which is used to upload the files. we are passing the storage object to the multer function