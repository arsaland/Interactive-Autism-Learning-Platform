import { Request, Response } from 'express';
import Video from '../models/Video';

export const getNextVideo = async (req: Request, res: Response) => {
    try {
        // Implement logic to fetch the next video based on user preferences and history
        const video = await Video.findOne({ /* query criteria */ });
        if (!video) {
            return res.status(404).json({ message: 'No videos available' });
        }
        res.status(200).json(video);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching next video', error });
    }
};