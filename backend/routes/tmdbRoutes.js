import express from 'express';
import * as tmdbController from '../controllers/tmdbController.js';

const router = express.Router();

// Specific routes
router.get('/trending/:type/:time', tmdbController.getTrending);
router.get('/movie/:id', tmdbController.getMovieDetails);
router.get('/movie/:id/credits', tmdbController.getMovieCredits);
router.get('/person/:id', tmdbController.getPersonDetails);
router.get('/top-rated/:type', tmdbController.getTopRated);
router.get('/popular/:type', tmdbController.getPopular);
router.get('/now-playing', tmdbController.getNowPlaying);
router.get('/search', tmdbController.search);
router.get('/genres/:type', tmdbController.getGenres);

// Generic post route for easier migration from old frontend logic
router.post('/fetch', tmdbController.genericFetch);

export default router;
