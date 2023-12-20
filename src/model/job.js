import mongoose from "mongoose";

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
    JobAllInfo:{
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
        type:String,
        required:true
    },

    jobTitle:{
        type:String,
        required:true,
    },
    jobName:{
        type:String,
        required:true
    },
    jobSummaryDescription:{
        type:String,
        required:true
    },
jobInfo:{
        type:String,
        required:true
    },
    jobpicture:{
        type:String,
        required:true

    },
    jobLocation:{
        type:String,
        required:true
    },
    publishedDate:{
        type:String,
        required:true
    },
    jobCriteria:{
        type:String,
        required:true
    }
  
})
const job=mongoose.model("job",jobSchema)
export default job