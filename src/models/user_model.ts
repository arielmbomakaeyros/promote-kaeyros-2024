

import mongoose, { Schema } from "mongoose"; 

const userSchema = new Schema(
    {
        fullName: {
            type: String, 
            required: [true, "Please provide a username"], 
            unique: true, 
        }, 
        email: {
            type: String, 
            required: [true, "Please provide a email"], 
            unique: true, 
        }, 
        phoneNumber: {
            type: Number, 
            required: [true, "Please provide a phone number"], 
            unique: true, 
        }, 
        companyName: {
            type: String, 
            // required: [true, "Please provide a username"], 
        }, 
        interestingService: {
            type: String, 
            // required: [true, "Please provide a username"], 
        }, 
    }, 
    {
        timestamps: true, 
    }
)

const User = mongoose.models.User || mongoose.model("User", userSchema); 

export default User; 