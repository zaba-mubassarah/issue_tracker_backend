import express from "express";

import {
  getProductSubCategory,
  getProductSubCategoryId,
  saveProductSubCategory,
  insertManyProductSubCategory,
  deleteProductSubCategory,
  updateProductSubCategory,
} from "../controllers/productSubCategory.js";
const router = express.Router();

router.get("/", getProductSubCategory);
router.get("/:id", getProductSubCategoryId);
router.post("/", saveProductSubCategory);
router.post("/all", insertManyProductSubCategory);
router.delete("/:id", deleteProductSubCategory);
router.put("/:id", updateProductSubCategory);

export default router;
