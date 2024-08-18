import { Router } from 'express';
import { registerUser, loginUser, softDeleteUser, getUserById, hardDeleteUser, updateUser } from '../controllers/userControllers';
import { authMiddleware } from '../middlewares/authMiddleware';

const router: Router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/:id', authMiddleware, getUserById);
router.patch('/:id', authMiddleware, updateUser);
router.patch('/delete/:id', authMiddleware, softDeleteUser);
router.delete('/delete/:id/hard', authMiddleware, hardDeleteUser);

export default router;
