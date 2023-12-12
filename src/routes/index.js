
import express from "express"
import jobRoutes from './jobRoutes'


const router=express.Router();
router.use("/job",jobRoutes)

export default router