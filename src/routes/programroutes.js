import express from "express";
import ProgramController from "../controller/programcontroller";

const router=express.Router()

router.post("/",ProgramController.PostProgram)
router.get("/",ProgramController.GetAllProgram)
router.delete("/",ProgramController.DeleteAllPorgram)
router.get("/:id",ProgramController.GetOneProgram)
router.delete("/:id",ProgramController.DeleteOneProgram)
router.patch("/:id",ProgramController.UpdateProgram)

export default router