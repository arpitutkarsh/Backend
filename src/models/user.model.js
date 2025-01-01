import mongoose, { Schema } from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
const userSchema = new Schema(
    {
        
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true, //this is used to remove the white spaces
            index: true //this is used to make the search faster
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true, //this is used to remove the white spaces
        },
        fullname: {
            type: String,
            required: true,
            trim: true, //this is used to remove the white spaces
            index: true //this is used to make the search faster
        },
        avatar: {
            type: String, //we will use cloudinary to upload files and it will give us a URL
            required: true,
        },
        coverImage: {
            type: String, //we will use cloudinary to upload files and it will give us a URL
        },
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        password: {
            type: String,
            required: [true, 'Password is Required']
        },
        refreshToken: { //this is used to store the refresh token. refresh token is used to get a new access token when the access token expires. refresh token is defined as a long-lived token that is used to obtain a new access token. It is used to get a new access token without the need to re-authenticate the user. Access token is a short-lived token that is used to access the user's data. It is used to access the user's data for a short period of time.
            type: String,
            
        }
    }, {
        timestamps: true
    }
)
//for the  below code, the bcrypt function will hash the password before saving, so everytime it saves it will hash the password. So there is a problem suppose that the user wants to change its avatar so after changing the avatar the user will save and before saving it will again hash the passowrd 
//so what we will do is that anytime the password field is modiefied it will work only then, means the first time and on password update or reset time so for this we will use another code
// if(this.isModified("password"))
userSchema.pre("save", async function(next) {
    if(!this.isModified("password")) return next()
    this.password = bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function(passowrd){ //here in this line  
    return await bcrypt.compare(passowrd, this.passowrd)
}

userSchema.methods.generateAccessToken = function(){
    return jwt.sign(//jwt.sign is used to generate the token
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullname: this.fullname
        }, 
        process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            
        }, 
        process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User", userSchema)




//now we will be installing bcrypt to hash the password
//bcrypt is a library that helps us to hash the password so that it is not stored in plain text in the database and it is more secure than storing the password in plain text
//npm install bcrypt
//json web token is a library that helps us to generate the access token and refresh token

//types of middlewares
//1. validate: this is used to validate the data before saving it to the database
//2. save: this is used to perform operations before saving the data to the database
//3. remove: this is used to perform operations before removing the data from the database
//4. init: this is used to perform operations before initializing the model
//5. updateOne: this is used to perform operations before updating the data in the database
//6. deleteOne: this is used to perform operations before deleting the data from the database

//JWT is a bearer token. It is a token that is used to access the user's data. Here bearer 