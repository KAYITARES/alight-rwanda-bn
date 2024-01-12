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

    jobAllInfo:{

        type:String,
        required:true
    },
    jobPicture:{
        type:Array,
    },
    jobLocation:{
        type:String,
        required:true
    },
    postedAt:{
        type:Date,
        default: new Date(Date.now())
    },
    jobCriteria:{
     type:String,
     required:true   
    },
    jobapply:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ApplyJob"
    }]
    })
    jobSchema.pre(/^find/, function(next){
        this.populate({
            path:"jobapply",
            select:"FirstName LastName"
        })
        next()
    })
    
const job=mongoose.model("job",jobSchema)
export default job