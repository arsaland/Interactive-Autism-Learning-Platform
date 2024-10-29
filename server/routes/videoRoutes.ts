import express from 'express';
import { getAllVideos, getNextVideo } from '../controllers/videoController';

const router = express.Router();

router.get('/', getAllVideos);
router.get('/next', getNextVideo);

export default router;