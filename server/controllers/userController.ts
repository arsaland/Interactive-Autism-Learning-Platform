import { Request, Response } from 'express';
import UserProfile from '../models/UserProfile';

export const createUserProfile = async (req: Request, res: Response) => {
    try {
        const { name, age, preferences } = req.body;
        const userProfile = new UserProfile({
            name,
            age,
            preferences,
        });
        await userProfile.save();
        res.status(201).json(userProfile);
    } catch (error) {
        res.status(500).json({ message: 'Error creating user profile', error });
    }
};

export const getUserProfile = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id;
        const userProfile = await UserProfile.findById(userId);
        if (!userProfile) {
            return res.status(404).json({ message: 'User profile not found' });
        }
        res.status(200).json(userProfile);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user profile', error });
    }
};