
import express from "express";
import userroutes from "./userroutes";
import programroutes from "./programroutes";
import jobRoutes from './jobRoutes';
import testimonialroutes from "./testimonialroutes";
import stockroutes from "./stockroutes";
import ApplyjobRoutes from "./jobApplyRoutes";




const router=express.Router();
router.use("/user",userroutes)

router.use("/job",jobRoutes);
router.use("/Applyjob",ApplyjobRoutes)

router.use("/program",programroutes)
router.use("/testimonial",testimonialroutes)
router.use("/stock",stockroutes)



export default router