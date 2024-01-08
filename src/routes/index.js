
import express from "express";
import userroutes from "./userroutes";
import programroutes from "./programroutes";
import testimonialroutes from "./testimonialroutes";
import stockroutes from "./stockroutes";
import blogrouter from "./blogroutes"

const router=express.Router();
router.use("/user",userroutes)
router.use("/program",programroutes)
router.use("/testimonial",testimonialroutes)
router.use("/comment",commentroutes)
router.use("/stock",stockroutes)
router.use("/blog",blogrouter)



export default router