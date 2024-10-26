import mongoose, { Document, Schema } from 'mongoose';

interface IVideo extends Document {
    title: string;
    url: string;
    category: string;
    duration: number;
}

const VideoSchema: Schema = new Schema({
    title: { type: String, required: true },
    url: { type: String, required: true },
    category: { type: String, required: true },
    duration: { type: Number, required: true },
});

export default mongoose.model<IVideo>('Video', VideoSchema);