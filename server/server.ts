import dotenv from 'dotenv';
dotenv.config();

import app from './app';
import connectDB from './utils/database';

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});