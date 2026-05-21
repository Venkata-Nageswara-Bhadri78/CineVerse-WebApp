const API_BASE_URL = import.meta.env.VITE_REACT_APP_BACKEND_URL || 'http://localhost:3000';
const TMDB_API_URL = `${API_BASE_URL}/api/tmdb`;

const handleResponse = async (response) => {
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Something went wrong');
    }
    return response.json();
};

export const fetchTmdb = async (params) => {
    const response = await fetch(`${TMDB_API_URL}/fetch`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
    });
    const result = await handleResponse(response);
    return result.data;
};

export const getTrendingMovies = (type = 'movie', time = 'day', page = 1) => {
    return fetch(`${TMDB_API_URL}/trending/${type}/${time}?page=${page}`).then(handleResponse).then(res => res.data);
};

export const getMovieDetails = (id) => {
    return fetch(`${TMDB_API_URL}/movie/${id}`).then(handleResponse).then(res => res.data);
};

export const getMovieCredits = (id) => {
    return fetch(`${TMDB_API_URL}/movie/${id}/credits`).then(handleResponse).then(res => res.data);
};

export const getPersonDetails = (id) => {
    return fetch(`${TMDB_API_URL}/person/${id}`).then(handleResponse).then(res => res.data);
};

export const getTopRated = (type = 'movie', page = 1) => {
    return fetch(`${TMDB_API_URL}/top-rated/${type}?page=${page}`).then(handleResponse).then(res => res.data);
};

export const getPopular = (type = 'movie', page = 1) => {
    return fetch(`${TMDB_API_URL}/popular/${type}?page=${page}`).then(handleResponse).then(res => res.data);
};

export const getNowPlaying = (page = 1) => {
    return fetch(`${TMDB_API_URL}/now-playing?page=${page}`).then(handleResponse).then(res => res.data);
};

export const search = (query, page = 1) => {
    return fetch(`${TMDB_API_URL}/search?query=${encodeURIComponent(query)}&page=${page}`).then(handleResponse).then(res => res.data);
};
