import express from "express";
import { v4 as uuid } from 'uuid';
import { getIssues,getIssuesById,saveIssues,deleteIssue,updateIssue} from '../controllers/issues.js';
const router = express.Router();

router.get('/',getIssues);
router.get('/:id',getIssuesById);
router.post('/',saveIssues);
router.delete('/:id',deleteIssue);
router.patch('/:id',updateIssue)
export default router;