import express from "express"
import jobController from "../controller/jobController";



const router=express.Router();
router.post("/",jobController.createjob);
router.get("/",jobController.getAlljob);
router.get("/:id",jobController.getOnejob);
router.delete("/",jobController.deleteAlljob);
router.delete("/:id",jobController.deleteOnejob);
router.patch("/:id",jobController.updatejob);
export default router