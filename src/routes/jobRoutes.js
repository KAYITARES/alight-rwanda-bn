import express from "express"
import jobController from "../controller/jobController";


const router=express.Router();
router.post("/",jobController.createjob)
router.get("/",jobController.getAlljob)
router.get("/",jobController.getOnejob)
export default router