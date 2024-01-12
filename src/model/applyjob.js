import mongoose from "mongoose";

const ApplyJobSchema=new mongoose.Schema({
    jobs:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"job"
    },
    FirstName:{
        type:String,
        required:true
    },
    LastName:{
        type:String,
        required:true
    },
    Email:{
     type:String,
    required:true
     },
     NationalId:{
        type:Number,
        required:true
     },
     PhoneNumber:{
        type:String,
       required:true
    },
     Country:{
      type:String,
        required:true
     },
     DateBirth:{
        type:String,
        required:true
     },
     Location:{
         type:String,
        required:true
     },
     EducationStatus:{
         type:String,
        required:true
     },
    Sex:{
        type:String,
    enum:["male","female"],
     },
    CurrentPosition:{
         type:String,
         required:true
     },
     MarriedorSingle:{
         type:String,
         required:true
     },
     UploadCV:{
         type:String,
         required:true
     }
})
ApplyJobSchema.pre(/^find/, function(next){
    this.populate({
        path:"jobs",
        select:"JobTitle JobName"
    })
    next()
});

const ApplyJob=mongoose.model("ApplyJob",ApplyJobSchema)
export default ApplyJob