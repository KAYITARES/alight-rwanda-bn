import express from "express";
import StockController from "../controller/stockcontroller";

const router=express.Router()

router.post("/",StockController.PostProduct)
router.get("/",StockController.GetAllProduct)
router.delete("/",StockController.DeleteAllProduct)
router.get("/:id",StockController.GetOneProduct)
router.delete("/:id",StockController.DeleteOneProduct)
router.patch("/:id",StockController.UpdateProduct)

export default router