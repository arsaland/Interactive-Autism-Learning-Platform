import express from 'express';
import { createUserProfile, getUserProfile } from '../controllers/userController';

const router = express.Router();

router.post('/', createUserProfile);
router.get('/:id', getUserProfile);

export default router;