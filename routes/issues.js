import express from "express";
import {
  getIssues,
  getIssuesById,
  saveIssues,
  insertManyIssue,
  deleteIssue,
  updateIssue,
} from "../controllers/issues.js";

const router = express.Router();

router.get("/", getIssues);
router.get("/:id", getIssuesById);
router.post("/", saveIssues);
router.post("/all", insertManyIssue);
router.delete("/:id", deleteIssue);
router.put("/:id", updateIssue);
export default router;
