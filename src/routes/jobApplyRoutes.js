import express from "express";
import jobApplyController from "../controller/jobApplyController";
import DataChecker from "../middlewares/datachecker";
import Validator from "../middlewares/validator";
import VerifyAccess from "../middlewares/verifyaccess";

const router=express.Router();
router.post("/",DataChecker.EmailExisting,Validator.InputValidator,jobApplyController.Apply)

router.get("/",VerifyAccess("admin","user"),jobApplyController.getAlljob)

export default router