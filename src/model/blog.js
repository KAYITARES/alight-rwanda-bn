import mongoose from "mongoose";

const BlogSchema=new mongoose.Schema({
    BlogTitle:{
        type:String,
        required:true
    },
    BlogSummary:{
        type:String,
        required:true
    },
    BlogDiscription:{
        type:String,
        required:true
    },
    BlogImage:{
        type:Array,
        required:true
    },
    PostedDate:{
        type:Date,
        default:Date.now()
    },
    Comment:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"COMMENT"
    }]

})
BlogSchema.pre(/^find/,function(next){
    this.populate({
        path:"Comment",
        select:"comment PostedDate"
    })
    next()
})
const BLOG=mongoose.model("BLOG",BlogSchema)
export default BLOG