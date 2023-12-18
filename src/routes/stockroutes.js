import express from "express";
import StockController from "../controller/stockcontroller";

const router=express.Router()

router.post("/import",StockController.ImportProduct)
router.post("/export",StockController.ExportProduct)
router.get("/export",StockController.GetAllExportProduct)
router.get("/",StockController.GetAllStock)
router.delete("/",StockController.DeleteAllStock)
router.get("/:id",StockController.GetOneProduct)
router.delete("/:id",StockController.DeleteOneProduct)
router.patch("/:id",StockController.UpdateProduct)

export default router