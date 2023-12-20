import express from "express";
import TestimonialController from "../controller/testimonialcontroller";
import VerifyAccess from "../middlewares/verifyaccess";

const router=express.Router()

router.post("/",VerifyAccess("user"),TestimonialController.PostTestimonial)
router.get("/",TestimonialController.GetAllTestimonial)
router.delete("/",VerifyAccess("admin"),TestimonialController.DeleteAllTestimonial)
router.get("/:id",TestimonialController.GetOneTestimonial)
router.delete("/:id",VerifyAccess("admin"),TestimonialController.DeleteOneTestimonial)
router.patch("/:id",VerifyAccess("user"),TestimonialController.UpdateTestimonial)

export default router