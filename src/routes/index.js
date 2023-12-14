import express from "express";
import userroutes from "./userroutes";
import jobRoutes from './jobRoutes';


const router=express.Router()

router.use("/user",userroutes)
router.use("/job",jobRoutes);

export default router