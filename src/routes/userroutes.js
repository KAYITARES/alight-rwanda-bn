import express from "express";
import UserController from "../controller/usercontroller";
import Validator from "../middlewares/validator";
import DataChecker from "../middlewares/datachecker";
import VerifyAccess from "../middlewares/verifyaccess";

const router=express.Router()

router.post("/",DataChecker.UserRegisterEmpty,DataChecker.EmailExisting,Validator.UserAccountRule(),Validator.InputValidator,UserController.CreateUser)
router.get("/",VerifyAccess("user"),UserController.GetAllUser)
router.delete("/",UserController.DeleteAllUser)
router.get("/:id",UserController.GetOneUser)
router.delete("/:id",UserController.DeleteOneUser)
router.patch("/:id",UserController.UpdateUser)
router.post("/login",UserController.Login)
export default router