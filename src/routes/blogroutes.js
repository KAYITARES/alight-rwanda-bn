import express from "express";
import BlogController from "../controller/blogcontroller";
import verifyAccess from "../middlewares/verifyaccess"
import BLOG from "../model/blog";

const router=express.Router()

router.post("/",verifyAccess("admin"),BlogController.CreateBlog)
router.get("/",BlogController.GetAllBlog)
router.delete("/",verifyAccess("admin"),BlogController.DeleteAllBLogs)
router.get("/:id",BlogController.getOneBlog)
router.delete("/:id",verifyAccess("admin"),BlogController.deleteOneBlog)
router.patch("/:id",verifyAccess("admin"),BlogController.updateBlog)
router.put("/Like/:id",verifyAccess("user"),BlogController.Like)
router.put("/Dislike/:id",verifyAccess("user"),BlogController.DisLike)

export default router