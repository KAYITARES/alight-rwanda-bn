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

    JobAllInformation:{

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
    },
    Applyjob: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Applyjob",
        },
      ],
    });
    jobSchema.pre(/^find/, function (next) {
      this.populate({
        path: "Applyjob",
        select: "Applyjob postedAt",
      })
      next();
    });
    

const job=mongoose.model("job",jobSchema)
export default job