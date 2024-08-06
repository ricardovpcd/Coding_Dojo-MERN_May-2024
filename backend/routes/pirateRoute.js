import express from "express";
import * as pirateController from "../controllers/pirateController.js";

const router = express.Router();
router.post("/pirate/create", pirateController.createPirate);
router.get("/pirate/getAll", pirateController.getAllPirates);
router.delete("/pirate/delete/:pirateId", pirateController.deletePirate);

export default router;