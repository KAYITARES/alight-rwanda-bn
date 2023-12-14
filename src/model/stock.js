import mongoose from "mongoose";

const stockschema=new mongoose.Schema({
    ProductName:{
        type:String,
        required:true
    },
    ProductPrice:{
        type:String,
        required:true
    },
    ProductQautity:{
        type:Number,
        required:true
    },
    ProductExpires:{
        type:String,
        required:true
    },
    PostDate:{
        type:Date,
        default:Date.now()
    }
})
const STOCK=mongoose.model("STOCK",stockschema)
export default STOCK