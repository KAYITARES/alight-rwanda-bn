
import express from "express";
import userroutes from "./userroutes";
import programroutes from "./programroutes";
import jobRoutes from './jobRoutes'


const router=express.Router();
router.use("/job",jobRoutes)
router.use("/user",userroutes)
router.use("/program",programroutes)

export default router