import express from "express";
import { addCategory,getalldrivers,getallpassengers } from "../../controller/adminController/vehicleController";
const router = express.Router();

router.route("/").post(addCategory);
router.route("/getalldrivers").get(getalldrivers);
router.route("/getallpassengers").get(getallpassengers);

export default router;
