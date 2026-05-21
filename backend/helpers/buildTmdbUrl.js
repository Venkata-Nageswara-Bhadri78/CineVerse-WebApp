import { tmdbConfig } from '../config/tmdbConfig.js';

export const buildTmdbUrl = (endpoint, params = {}) => {
    const url = new URL(`${tmdbConfig.baseUrl}/${endpoint}`);
    url.searchParams.append('api_key', tmdbConfig.apiKey);
    
    Object.keys(params).forEach(key => {
        if (params[key] !== undefined && params[key] !== null && params[key] !== '') {
            url.searchParams.append(key, params[key]);
        }
    });
    
    return url.toString();
};
