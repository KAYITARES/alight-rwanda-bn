import express from "express";
import CommentController from "../controller/commentcontroller";
import verifyAccessUsers from "../middlewares/verifyaccessusers";

const router=express.Router()

router.post("/:id",verifyAccessUsers,CommentController.CreateComment)
router.get("/",CommentController.getcomment)

export default router