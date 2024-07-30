import express from "express";
import * as productController from "../controllers/productController.js";

const router = express.Router();
router.post("/product/create", productController.createProduct);
router.get("/product/findAll", productController.findAll);
router.delete("/product/deleteOne/:idProduct", productController.deleteOne);

export default router;