import mongoose from "mongoose";

const jobSchema=new  mongoose.Schema({
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