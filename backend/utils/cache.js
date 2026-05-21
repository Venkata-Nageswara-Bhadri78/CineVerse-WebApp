import NodeCache from 'node-cache';

// stdTTL: 1 hour (3600 seconds)
// checkperiod: 120 seconds
const cache = new NodeCache({ stdTTL: 3600, checkperiod: 120 });

export const getCache = (key) => cache.get(key);

export const setCache = (key, value, ttl) => {
    if (ttl) {
        return cache.set(key, value, ttl);
    }
    return cache.set(key, value);
};

export const deleteCache = (key) => cache.del(key);

export const generateCacheKey = (endpoint, params = {}) => {
    const paramString = JSON.stringify(params);
    return `${endpoint}:${paramString}`;
};

export default cache;
