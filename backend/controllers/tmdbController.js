import * as tmdbService from '../services/tmdbService.js';
import { sendSuccess } from '../utils/apiResponse.js';

export const getTrending = async (req, res, next) => {
    try {
        const { type = 'movie', time = 'day' } = req.params;
        const { page = 1 } = req.query;
        const data = await tmdbService.getTrending(type, time, page);
        sendSuccess(res, data, 'Trending data fetched successfully');
    } catch (error) {
        next(error);
    }
};

export const getMovieDetails = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { append_to_response = '' } = req.query;
        const data = await tmdbService.getMovieDetails(id, append_to_response);
        sendSuccess(res, data, 'Movie details fetched successfully');
    } catch (error) {
        next(error);
    }
};

export const getMovieCredits = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = await tmdbService.getMovieCredits(id);
        sendSuccess(res, data, 'Movie credits fetched successfully');
    } catch (error) {
        next(error);
    }
};

export const getPersonDetails = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = await tmdbService.getPersonDetails(id);
        sendSuccess(res, data, 'Person details fetched successfully');
    } catch (error) {
        next(error);
    }
};

export const getTopRated = async (req, res, next) => {
    try {
        const { type = 'movie' } = req.params;
        const { page = 1 } = req.query;
        const data = await tmdbService.getTopRated(type, page);
        sendSuccess(res, data, 'Top rated data fetched successfully');
    } catch (error) {
        next(error);
    }
};

export const getPopular = async (req, res, next) => {
    try {
        const { type = 'movie' } = req.params;
        const { page = 1 } = req.query;
        const data = await tmdbService.getPopular(type, page);
        sendSuccess(res, data, 'Popular data fetched successfully');
    } catch (error) {
        next(error);
    }
};

export const getNowPlaying = async (req, res, next) => {
    try {
        const { page = 1 } = req.query;
        const data = await tmdbService.getNowPlaying(page);
        sendSuccess(res, data, 'Now playing movies fetched successfully');
    } catch (error) {
        next(error);
    }
};

export const search = async (req, res, next) => {
    try {
        const { query, page = 1 } = req.query;
        if (!query) {
            throw new Error('Query parameter is required');
        }
        const data = await tmdbService.searchTmdb(query, page);
        sendSuccess(res, data, 'Search results fetched successfully');
    } catch (error) {
        next(error);
    }
};

export const getGenres = async (req, res, next) => {
    try {
        const { type = 'movie' } = req.params;
        const data = await tmdbService.getGenres(type);
        sendSuccess(res, data, 'Genres fetched successfully');
    } catch (error) {
        next(error);
    }
};

export const genericFetch = async (req, res, next) => {
    try {
        const { type, id, category, time, page, person_id, movie_id, credits, query } = req.body;
        
        let endpoint = '';
        let params = { page };

        if (type === 'search') {
            endpoint = 'search/multi';
            params.query = query;
        } else if (movie_id) {
            endpoint = `movie/${movie_id}${credits || ''}`;
        } else if (person_id) {
            // Handle person details or TV details if misused in frontend
            if (type === 'tv') {
                endpoint = `tv/${person_id}`;
            } else {
                endpoint = `person/${person_id}`;
            }
        } else if (type === 'trending') {
            endpoint = `trending/${category || 'movie'}/${time || 'day'}`;
        } else if (category === 'top_rated' || category === 'popular' || category === 'now_playing') {
            endpoint = `${type || 'movie'}/${category}`;
        } else if (type && category) {
            endpoint = `${type}/${category}`;
        } else if (type && id) {
             endpoint = `${type}/${id}${credits || ''}`;
        }

        if (!endpoint) {
             throw new Error('Invalid parameters for TMDB fetch');
        }

        const data = await tmdbService.fetchFromTmdb(endpoint, params);
        sendSuccess(res, data, 'Data fetched successfully');
    } catch (error) {
        next(error);
    }
};
