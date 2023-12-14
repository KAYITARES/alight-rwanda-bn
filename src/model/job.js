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
    }
  
})
const job=mongoose.model("job",jobSchema)
export default job