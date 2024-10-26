import express from 'express';
import { getNextVideo } from '../controllers/videoController';

const router = express.Router();

router.get('/next', getNextVideo);

export default router;