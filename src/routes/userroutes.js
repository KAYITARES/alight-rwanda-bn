import express from "express";
import UserController from "../controller/usercontroller";

const router=express.Router()

router.post("/",UserController.CreateUser)
router.get("/",UserController.GetAllUser)
router.delete("/",UserController.DeleteAllUser)
router.get("/:id",UserController.GetOneUser)
router.delete("/:id",UserController.DeleteOneUser)
router.patch("/:id",UserController.UpdateUser)
router.post("/login",UserController.Login)
export default router