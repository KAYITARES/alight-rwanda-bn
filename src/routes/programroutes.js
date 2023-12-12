import express from "express";
import ProgramController from "../controller/programcontroller";

const router=express.Router()

router.post("/",ProgramController.PostProgram)
router.get("/",ProgramController.GetAllProgram)
router.delete("/",ProgramController.DeleteAllPorgram)

export default router