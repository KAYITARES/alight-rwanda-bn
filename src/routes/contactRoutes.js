import express from "express"
import contactUsController from "../controller/contactUsController"
import VerifyAccess from "../middlewares/verifyaccess"
import validator from "../middlewares/validator"
import DataChecker from "../middlewares/datachecker"

const router=express.Router()

router.post("/",VerifyAccess("user"),contactUsController.createContact);
router.get("/",contactUsController.getAllContact)
router.get("/:id",VerifyAccess("admin"),contactUsController.getOnecontact)


export default router