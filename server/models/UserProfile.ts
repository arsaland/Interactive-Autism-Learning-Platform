import mongoose, { Document, Schema } from 'mongoose';

interface IUserProfile extends Document {
    name: string;
    age: number;
    preferences: {
        fontSize: string;
        colorScheme: string;
        buttonSize: string;
    };
    videoHistory: {
        videoId: string;
        watchedAt: Date;
        completionRate: number;
    }[];
}

const UserProfileSchema: Schema = new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    preferences: {
        fontSize: { type: String, default: 'medium' },
        colorScheme: { type: String, default: 'default' },
        buttonSize: { type: String, default: 'medium' },
    },
    videoHistory: [{
        videoId: { type: String, required: true },
        watchedAt: { type: Date, default: Date.now },
        completionRate: { type: Number, default: 0 },
    }],
});

export default mongoose.model<IUserProfile>('UserProfile', UserProfileSchema);