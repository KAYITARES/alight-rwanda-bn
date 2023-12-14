import express from "express";
import userroutes from "./userroutes"
import jobRoutes from './jobRoutes'
import jobApplyRoutes from "./jobApplyRoutes"


const router=express.Router()

router.use("/user",userroutes);
router.use("/job",jobRoutes);
router.use("/Applyjob",jobApplyRoutes);


export default router