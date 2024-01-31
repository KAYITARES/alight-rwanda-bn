
import express from "express";
import userroutes from "./userroutes"
import jobRoutes from './jobRoutes'
import programroutes from "./programroutes";
import testimonialroutes from "./testimonialroutes";
import stockroutes from "./stockroutes";
import applyroutes from "./applyroutes";
import contactRoutes from "./contactRoutes";

const router=express.Router();

router.use("/job",jobRoutes)
router.use("/user",userroutes)
router.use("/program",programroutes)
router.use("/testimonial",testimonialroutes)
router.use("/stock",stockroutes)
router.use("/apply",applyroutes)
router.use("/contact",contactRoutes)





export default router