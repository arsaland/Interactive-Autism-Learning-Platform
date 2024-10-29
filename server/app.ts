import express from 'express';
import cors from 'cors';
import analyticsRoutes from './routes/analyticsRoutes';
import videoRoutes from './routes/videoRoutes';

const app = express();

app.use(cors());
app.use(express.json());

// API routes
app.use('/api/analytics', analyticsRoutes);
app.use('/api/videos', videoRoutes);

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!', error: err.message });
});

export default app;