import express from "express";
import UserController from "../controller/usercontroller";

const router=express.Router()

router.post("/",UserController.CreateUser)

export default router