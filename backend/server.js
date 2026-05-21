import express from 'express';
import cors from 'cors';
import compression from 'compression';
import dotenv from 'dotenv';
import tmdbRoutes from './routes/tmdbRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(compression());
app.use(express.json());

// Routes
app.use('/api/tmdb', tmdbRoutes);

// Health check
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'CineVerse Backend is running' });
});

// Error handling
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
