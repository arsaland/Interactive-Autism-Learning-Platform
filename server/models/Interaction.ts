import mongoose, { Document, Schema } from 'mongoose';

interface IInteraction extends Document {
    userId: string;
    videoId: string;
    type: string;
    timestamp: Date;
}

const InteractionSchema: Schema = new Schema({
    userId: { type: String, required: true },
    videoId: { type: String, required: true },
    type: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
});

export default mongoose.model<IInteraction>('Interaction', InteractionSchema);