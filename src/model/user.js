import mongoose from "mongoose";

<<<<<<< HEAD:src/model/user.js
const userschema=new mongoose.Schema({
    FirstName:{
        type:String,
        required:true
    },
    LastName:{
        type:String,
        required:true
    },
    UserName:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    RetypePassword:{
=======
const jobSchema=new  mongoose.Schema({
    JobTitle:{
        type:String,
        required:true,
    },
    JobName:{
        type:String,
        required:true
    },
    JobSummaryDescription:{
        type:String,
        required:true
    },
JobInfo:{
        type:String,
        required:true
    },
    Jobpicture:{
        type:Array,
     

    },
    JobLocation:{
        type:String,
        required:true
    },
    PublishedDate:{
        type:String,
        required:true
    },
    JobCriteria:{
>>>>>>> af1ed97 (job):src/model/job.js
        type:String,
    },
    Role:{
        type:String,
        enum:["admin","user"],
        default:"user"
    },
    CreatedDate:{
        type:Date,
        default:Date.now()
    }
})
const USER=mongoose.model("USER",userschema)
export default USER
