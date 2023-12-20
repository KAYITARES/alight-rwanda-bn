import express from "express";
import jobApplyController from "../controller/jobApplyController";
import DataChecker from "../middlewares/datachecker";
import Validator from "../middlewares/validator";
import VerifyAccess from "../middlewares/verifyaccess";

const router=express.Router()

router.post("/:id",VerifyAccess("user"),jobApplyController.Applyjobed);
router.get("/",jobApplyController.getAllAppjob);
router.delete("/:id",jobApplyController.deleteOnejobApply)


export default router