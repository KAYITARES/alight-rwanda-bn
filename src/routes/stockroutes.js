import express from "express";
import StockController from "../controller/stockcontroller";

const router=express.Router()

router.post("/",StockController.PostProduct)

export default router