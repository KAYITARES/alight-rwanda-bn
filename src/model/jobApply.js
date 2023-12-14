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
Password:{
type:String,
required:true
},
Location:{
type:String,
required:true
},
Experience:{
type:String,
required:true   
},
Features:{
 type:String,
required:true  
},
degree:{
 type:String,
 required:true   
}   
    
})
const jobApply=mongoose.model("jobApply",jobApplySchema)
export default jobApply   