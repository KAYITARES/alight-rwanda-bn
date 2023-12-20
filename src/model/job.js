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