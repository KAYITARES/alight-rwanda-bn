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
    Qauntity:{
        type:Number,
        default:0
    },
    ProductExpires:{
        type:String,
        required:true
    },
    ExportHistory:[{
        Location:String,
        Quantitys:Number,
        TimeDelivery:Date
    }],
    PostDate:{
        type:Date,
        default:Date.now()
    }
})
const STOCK=mongoose.model("PRODUCT",stockschema)
export default STOCK