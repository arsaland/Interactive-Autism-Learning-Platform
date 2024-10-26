import express from 'express';
import cors from 'cors';
import interactionRoutes from './routes/interactionRoutes';
import userRoutes from './routes/userRoutes';
import videoRoutes from './routes/videoRoutes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/interactions', interactionRoutes);
app.use('/api/users', userRoutes);
app.use('/api/videos', videoRoutes);

export default app;