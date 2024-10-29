import { Request, Response } from 'express';
import Video from '../models/Video';

export const getNextVideo = async (req: Request, res: Response) => {
    try {
        const { lastVideoId, category } = req.query;
        const query: any = {};

        if (category) {
            query.category = category;
        }

        if (lastVideoId) {
            query._id = { $ne: lastVideoId };
        }

        const video = await Video.findOne(query);

        if (!video) {
            return res.status(404).json({ message: 'No videos available' });
        }

        res.status(200).json(video);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching next video', error });
    }
};

export const getAllVideos = async (req: Request, res: Response) => {
    try {
        const videos = await Video.find();
        res.status(200).json(videos);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching videos', error });
    }
};