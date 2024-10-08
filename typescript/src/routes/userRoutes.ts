import { Router } from "express";
import { createUser, getUsers, updateUsers, deleteUser } from "../controllers/userController";

const router = Router();

router.post('/', createUser);
router.get('/', getUsers);
router.put('/:id', updateUsers);
router.delete('/:id', deleteUser);

export default router;