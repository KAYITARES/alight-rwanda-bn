import express from  "express";
import ApplyJobController from "../controller/applyjobcontroller";
import VerifyAccess from "../middlewares/verifyaccess";

const router = express.Router()

router.post("/:id",ApplyJobController.ApplyOneJob);
router.get("/",ApplyJobController.getAllApplyjob);
router.get("/:id",VerifyAccess("admin"),ApplyJobController.getOnejobApply);
router.delete("/",VerifyAccess("admin"),ApplyJobController.deleteAlljobapply);
router.delete("/:id",VerifyAccess("admin"),ApplyJobController.deleteOnejobapply);

export default router