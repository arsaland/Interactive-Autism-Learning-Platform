import { Request, Response } from 'express';
import { generateAnalytics as generateAnalyticsService } from '../services/analyticsService';

export const generateAnalytics = async (req: Request, res: Response) => {
    try {
        const analytics = await generateAnalyticsService();
        res.json(analytics);
    } catch (error) {
        console.error('Analytics generation error:', error);
        res.status(500).json({ message: 'Error generating analytics' });
    }
};
