import fetch from 'node-fetch';
import { tmdbConfig } from '../config/tmdbConfig.js';
import { getCache, setCache, generateCacheKey } from '../utils/cache.js';

// Helper to filter unnecessary data from lists
const transformList = (results) => {
    if (!results || !Array.isArray(results)) return [];
    return results.map(item => {
        const isPerson = item.media_type === 'person' || item.profile_path;
        
        if (isPerson) {
            return {
                id: item.id,
                name: item.name,
                profile_path: item.profile_path,
                popularity: item.popularity,
                known_for_department: item.known_for_department,
                media_type: 'person'
            };
        }
        
        return {
            id: item.id,
            title: item.title || item.name,
            name: item.name || item.title,
            poster_path: item.poster_path,
            backdrop_path: item.backdrop_path,
            vote_average: item.vote_average,
            release_date: item.release_date || item.first_air_date,
            first_air_date: item.first_air_date || item.release_date,
            media_type: item.media_type || (item.first_air_date ? 'tv' : 'movie'),
            genre_ids: item.genre_ids
        };
    });
};

// Helper to filter unnecessary data from movie details
const transformDetails = (data) => {
    if (!data) return null;
    return {
        id: data.id,
        title: data.title || data.name,
        name: data.name || data.title,
        original_title: data.original_title || data.original_name,
        overview: data.overview,
        tagline: data.tagline,
        poster_path: data.poster_path,
        backdrop_path: data.backdrop_path,
        vote_average: data.vote_average,
        vote_count: data.vote_count,
        release_date: data.release_date || data.first_air_date,
        first_air_date: data.first_air_date || data.release_date,
        genres: data.genres,
        runtime: data.runtime,
        homepage: data.homepage,
        production_companies: data.production_companies ? data.production_companies.map(c => ({
            id: c.id,
            name: c.name,
            logo_path: c.logo_path
        })) : [],
        credits: data.credits ? {
            cast: transformCast(data.credits.cast),
            crew: data.credits.crew ? data.credits.crew.slice(0, 5) : []
        } : undefined
    };
};

// Helper to filter unnecessary data from TV details
const transformTvDetails = (data) => {
    if (!data) return null;
    return {
        id: data.id,
        name: data.name,
        tagline: data.tagline,
        overview: data.overview,
        poster_path: data.poster_path,
        backdrop_path: data.backdrop_path,
        vote_average: data.vote_average,
        first_air_date: data.first_air_date,
        number_of_seasons: data.number_of_seasons,
        number_of_episodes: data.number_of_episodes,
        genres: data.genres,
        homepage: data.homepage,
        seasons: data.seasons ? data.seasons.map(s => ({
            id: s.id,
            name: s.name,
            overview: s.overview,
            poster_path: s.poster_path,
            season_number: s.season_number,
            episode_count: s.episode_count,
            air_date: s.air_date
        })) : [],
        production_companies: data.production_companies ? data.production_companies.map(c => ({
            id: c.id,
            name: c.name,
            logo_path: c.logo_path
        })) : []
    };
};

const transformCast = (cast) => {
    if (!cast || !Array.isArray(cast)) return [];
    return cast.slice(0, 20).map(person => ({
        id: person.id,
        name: person.name,
        character: person.character,
        profile_path: person.profile_path
    }));
};

const transformPerson = (data) => {
    if (!data) return null;
    return {
        id: data.id,
        name: data.name,
        biography: data.biography,
        birthday: data.birthday,
        deathday: data.deathday,
        also_known_as: data.also_known_as,
        place_of_birth: data.place_of_birth,
        profile_path: data.profile_path,
        known_for_department: data.known_for_department,
        popularity: data.popularity
    };
};

export const fetchFromTmdb = async (endpoint, params = {}, ttl = 3600) => {
    const cacheKey = generateCacheKey(endpoint, params);
    const cachedData = getCache(cacheKey);

    if (cachedData) {
        return cachedData;
    }

    const ipAddress = '3.175.86.50';
    
    // Clean up params to remove undefined/null values
    const cleanParams = { api_key: tmdbConfig.apiKey };
    Object.keys(params).forEach(key => {
        if (params[key] !== undefined && params[key] !== null && params[key] !== '') {
            cleanParams[key] = params[key];
        }
    });

    const queryParams = new URLSearchParams(cleanParams).toString();
    
    const url = `http://${ipAddress}/3/${endpoint}?${queryParams}`;
    const headers = { 'Host': 'api.themoviedb.org' };

    try {
        const response = await fetch(url, { headers });
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({ status_message: 'Unknown error' }));
            throw new Error(errorData.status_message || `TMDB API error: ${response.status}`);
        }
        
        let data = await response.json();
        
        // Apply transformations based on endpoint type
        if (endpoint.includes('trending') || endpoint.includes('popular') || endpoint.includes('top_rated') || endpoint.includes('now_playing') || endpoint.includes('search') || endpoint.includes('discover')) {
            data.results = transformList(data.results);
        } else if (endpoint.includes('/credits')) {
            data.cast = transformCast(data.cast);
        } else if (endpoint.startsWith('movie/')) {
            data = transformDetails(data);
        } else if (endpoint.startsWith('tv/')) {
            data = transformTvDetails(data);
        } else if (endpoint.startsWith('person/')) {
            data = transformPerson(data);
        }

        setCache(cacheKey, data, ttl);
        return data;
    } catch (error) {
        console.error(`TMDB Fetch Error [${endpoint}]:`, error.message);
        throw error;
    }
};

export const getTrending = (type, time, page) => {
    return fetchFromTmdb(`trending/${type}/${time}`, { page }, 3600);
};

export const getMovieDetails = (movieId, appendToResponse = '') => {
    return fetchFromTmdb(`movie/${movieId}`, { append_to_response: appendToResponse }, 86400);
};

export const getMovieCredits = (movieId) => {
    return fetchFromTmdb(`movie/${movieId}/credits`, {}, 86400);
};

export const getPersonDetails = (personId) => {
    return fetchFromTmdb(`person/${personId}`, {}, 86400);
};

export const getTopRated = (type, page) => {
    return fetchFromTmdb(`${type}/top_rated`, { page }, 3600 * 12);
};

export const getPopular = (type, page) => {
    return fetchFromTmdb(`${type}/popular`, { page }, 3600 * 12);
};

export const getNowPlaying = (page) => {
    return fetchFromTmdb(`movie/now_playing`, { page }, 3600 * 6);
};

export const searchTmdb = (query, page) => {
    return fetchFromTmdb(`search/multi`, { query, page }, 3600);
};

export const getGenres = (type = 'movie') => {
    return fetchFromTmdb(`genre/${type}/list`, {}, 86400);
};

export const discoverTmdb = (type, params) => {
    return fetchFromTmdb(`discover/${type}`, params, 3600);
};
