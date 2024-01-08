import express from "express";
import BlogController from "../controller/blogcontroller";
import verifyAccess from "../middlewares/verifyaccess"

const router=express.Router()

router.post("/",BlogController.CreateBlog)
router.get("/",BlogController.GetAllBlog)
router.delete("/",BlogController.DeleteAllBLogs)
router.put("/Like/:id",verifyAccess("user"),BlogController.Like)
router.put("/Dislike/:id",verifyAccess("user"),BlogController.DisLike)

export default router