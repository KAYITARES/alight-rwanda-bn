import express from "express";
import jobApplyController from "../controller/jobApplyController";
import DataChecker from "../middlewares/datachecker";
import Validator from "../middlewares/validator";
import VerifyAccess from "../middlewares/verifyaccess";

const router=express.Router()

router.post("/",jobApplyController.Appjob)


export default router