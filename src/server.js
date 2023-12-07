import  express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";


const app=express()
dotenv.config()


const port=process.env.PORT
const database=process.env.DATABASE

app.listen(port,()=>{
console.log(`port running on.....${port}`)
})

mongoose.connect(database).then(()=>{
    console.log(`database successfuly connected`)
})
.catch((error)=>{
    console.log(error)
})

export default app
