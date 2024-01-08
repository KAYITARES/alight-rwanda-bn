import express from "express";
import BlogController from "../controller/blogcontroller";

const router=express.Router()

router.post("/",BlogController.CreateBlog)
router.get("/",BlogController.GetAllBlog)
router.delete("/",BlogController.DeleteAllBLogs)

export default router