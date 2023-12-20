import express from "express"
import jobController from "../controller/jobController";
import Validator from "../middlewares/validator";
import verifyaccess from "../middlewares/verifyaccess";
import datachecker from "../middlewares/datachecker";

import Validator from "../middlewares/validator";
import verifyaccess from "../middlewares/verifyaccess";
import datachecker from "../middlewares/datachecker";



const router=express.Router();
router.post("/",verifyaccess("admin"),jobController.createjob);
router.get("/",jobController.getAlljob);

router.get("/:id",verifyaccess("admin"),jobController.getOnejob);
router.delete("/",jobController.deleteAlljob);
router.delete("/:id",verifyaccess("admin"),jobController.deleteOnejob);
router.patch("/:id",verifyaccess("admin"),jobController.updatejob);

router.get("/:id",jobController.getOnejob);
router.delete("/",verifyaccess("admin"),jobController.deleteAlljob);
router.delete("/:id",verifyaccess("admin"),jobController.deleteOnejob);
router.patch("/:id",verifyaccess("admin"),jobController.updatejob);



const router=express.Router();
router.post("/",jobController.createjob)
router.get("/",jobController.getAlljob)
router.get("/",jobController.getOnejob)


export default router