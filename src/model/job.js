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
    postedAt:{
        type:Date,
        default: new Date(Date.now())
    },
    JobCriteria:{
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