import mongoose from "mongoose";

const jobApplySchema= new mongoose.Schema({
 FirstName:{
type:String,
required:true,
 },
 LastName:{
type:String,
required:true  
 },
 Email:{
 type:String,
 required:true   

 },
 PhoneNumber:{
  type:String,
  required:true  
 },
 NationalID:{
type:String,
required:true
 },
 DateBirth:{
type:String,
required:true

 },
 Country:{
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
 CurrentPosition:{
type:String,
required:true
 },
 Sex:{
 type:String,
required:true
 },
 MarriedorSingle:{
type:String,
required:true
 },
 UploadFileCv:{
type:String,
required:true
 },
 Jobs:{
type:String,
required:true
 },
 Howyougotthisjob:{
type:String,
required:true
 },
 postedAt:{
    type:Date,
    default: new Date(Date.now())
},
user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"

},
})
jobApplySchema.pre(/^find/,function (next){
this.populate({
    path:"user",
    select:"firstName lastName email"
})
next()
})
const Applyjob=mongoose.model("Applyjob",jobApplySchema)
export default Applyjob