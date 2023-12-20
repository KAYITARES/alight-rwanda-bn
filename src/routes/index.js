
import express from "express";
import userroutes from "./userroutes";

import jobRoutes from './jobRoutes';


import programroutes from "./programroutes";
import jobRoutes from './jobRoutes';
import testimonialroutes from "./testimonialroutes";
import stockroutes from "./stockroutes";




const router=express.Router();
router.use("/job",jobRoutes)
router.use("/user",userroutes)

router.use("/job",jobRoutes);

router.use("/program",programroutes)
router.use("/testimonial",testimonialroutes)
router.use("/stock",stockroutes)



export default router