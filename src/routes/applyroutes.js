import express from  "express";
import ApplyJobController from "../controller/applyjobcontroller";

const router = express.Router()

router.post("/:id",ApplyJobController.ApplyOneJob);
router.get("/",ApplyJobController.getAllApplyjob);
router.get("/:id",ApplyJobController.getOnejobApply);
router.delete("/",ApplyJobController.deleteAlljobapply);
router.delete("/",ApplyJobController.deleteOnejobapply);

export default router