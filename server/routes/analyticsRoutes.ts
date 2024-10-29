import express from 'express';
import { generateAnalytics } from '../controllers/analyticsController';

const router = express.Router();

router.get('/', generateAnalytics);

export default router;
