import express from  "express";
import ApplyJobController from "../controller/applyjobcontroller";

const router = express.Router()

router.post("/:id",ApplyJobController.ApplyOneJob);
router.get("/",ApplyJobController.getAllApplyjob);


export default router