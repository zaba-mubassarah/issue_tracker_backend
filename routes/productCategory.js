import express from "express";

import {
  getProductCategory,
  getProductCategoryId,
  saveProductCategory,
  insertManyProductCategory,
  deleteProductCategory,
  updateProductCategory,
} from "../controllers/productCategory.js";
const router = express.Router();

router.get("/", getProductCategory);
router.get("/:id", getProductCategoryId);
router.post("/", saveProductCategory);
router.post("/all", insertManyProductCategory);
router.delete("/:id", deleteProductCategory);
router.put("/:id", updateProductCategory);

export default router;
