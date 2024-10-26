import { Request, Response } from 'express';
import Interaction from '../models/Interaction';

export const logInteraction = async (req: Request, res: Response) => {
    try {
        const { userId, videoId, type, timestamp } = req.body;
        const interaction = new Interaction({
            userId,
            videoId,
            type,
            timestamp,
        });
        await interaction.save();
        res.status(201).json({ message: 'Interaction logged successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error logging interaction', error });
    }
};

export const getInteractions = async (req: Request, res: Response) => {
    try {
        const interactions = await Interaction.find();
        res.status(200).json(interactions);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching interactions', error });
    }
};