import express from "express";
import userroutes from "./userroutes";
import programroutes from "./programroutes";

const router=express.Router()

router.use("/user",userroutes)
router.use("/program",programroutes)
export default router