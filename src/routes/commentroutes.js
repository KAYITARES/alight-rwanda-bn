import express from "express";
import CommentController from "../controller/commentcontroller";
import verifyAccessUsers from "../middlewares/verifyaccessusers";

const router=express.Router()

router.post("/:id",verifyAccessUsers,CommentController.CreateComment)
router.get("/",CommentController.getcomment)
router.get("/:id",CommentController.getOneComment)
router.delete("/:id",CommentController.deleteOneComment)
router.patch("/:id",CommentController.updateComment)
router.delete("/",CommentController.deleteAllComment)

export default router