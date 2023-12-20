import express from "express";
import StockController from "../controller/stockcontroller";
import verifyAcssess from "../middlewares/verifyaccess";

const router=express.Router()

router.post("/import",verifyAcssess("admin"),StockController.ImportProduct)
router.post("/export",verifyAcssess("user"),StockController.ExportProduct)
router.get("/",verifyAcssess("admin"),StockController.GetAllStock)
router.delete("/",verifyAcssess("admin"),StockController.DeleteAllStock)
router.get("/:id",verifyAcssess("admin"),StockController.GetOneProduct)
router.delete("/:id",verifyAcssess("admin"),StockController.DeleteOneProduct)
router.patch("/:id",verifyAcssess("admin"),StockController.UpdateProduct)

export default router