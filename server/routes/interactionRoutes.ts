import express from 'express';
import { logInteraction, getInteractions } from '../controllers/interactionController';

const router = express.Router();

router.post('/', logInteraction);
router.get('/', getInteractions);

export default router;