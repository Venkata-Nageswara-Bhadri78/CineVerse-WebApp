import dotenv from 'dotenv';
dotenv.config();

export const tmdbConfig = {
    apiKey: process.env.TMDB_API_KEY,
    baseUrl: process.env.TMDB_BASE_URL || 'https://api.themoviedb.org/3',
};
