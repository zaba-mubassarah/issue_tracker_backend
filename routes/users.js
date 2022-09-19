import express from "express";
import { v4 as uuid } from 'uuid';
import { getUsers,getUserById,saveUser,deleteUser,updateUser} from '../controllers/users.js';
const router = express.Router();

router.get('/',getUsers);
router.get('/:id',getUserById);
router.post('/',saveUser);
router.delete('/:id',deleteUser);
router.patch('/:id',updateUser)
export default router;