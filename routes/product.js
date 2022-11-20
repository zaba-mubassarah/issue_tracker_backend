import express from "express";

import {
  getProducts,
  getProductById,
  saveProduct,
  insertManyProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/products.js";
const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/", saveProduct);
router.post("/all", insertManyProduct);
router.delete("/:id", deleteProduct);
router.put("/:id", updateProduct);

export default router;
