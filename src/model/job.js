import mongoose from "mongoose";

const jobSchema=new  mongoose.Schema({

    jobTitle:{
        type:String,
        required:true,
    },
    jobSummaryDescription:{
        type:String,
        required:true
    },
    jobAllInfo:{
        type:String,
        required:true
    },
    jobpicture:{
        type:Array,
    },
    jobLocation:{
        type:String,
        required:true
    },
    jobCriteria:{
        type:String,
        required:true
    },
    publisherDate:{
        type:Date,
        default: new Date(Date.now())
    },

    deadLine:{
        type:Date,
        default: new Date(Date.now())
    }

   
})
const job=mongoose.model("job",jobSchema)
export default job