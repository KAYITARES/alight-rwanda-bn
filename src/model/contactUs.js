import mongoose from "mongoose";

const contactUsSchema= new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    publisherDate:{
        type:Date,
        default: new Date(Date.now())
    },
    
})
const contactUs=mongoose.model("contact-us",contactUsSchema)

export default contactUs