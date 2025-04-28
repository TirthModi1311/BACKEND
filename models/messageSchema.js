import mongoose from "mongoose";
import validator from "validator"; // for email validation


const messageSchema = new mongoose.Schema({

    name:{
        type:String,
        required:[true,"Name Required"],
        minlength:[3,"Name must contain at least 3 characters"],
    },
    email:{
        type:String,
        required:[true,"Email Required"],
        validate:[validator.isEmail,"Please provide valide email"],    //validator package installation is required to validate the email
    },
    subject:{
        type:String,
        required:[true,"Subject Required"],
        minlength:[5,"Subject must contain at least 5 characters"],
    },
    description:{
        type:String,
        required:[true,"Message Required"],
        minlength:[10,"Message must contain at least 10 characters"],
    },
});

export const message = mongoose.model("Message",messageSchema);