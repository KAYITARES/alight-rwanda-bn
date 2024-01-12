import express from "express";
import CommentController from "../controller/commentcontroller";
import VerifyAccess from "../middlewares/verifyaccess";

const router=express.Router()

router.post("/:id",VerifyAccess("user"),CommentController.CreateComment)
router.get("/",CommentController.getcomment)

export default router