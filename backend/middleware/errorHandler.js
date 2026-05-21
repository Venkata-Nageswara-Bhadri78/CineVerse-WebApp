import { sendError } from '../utils/apiResponse.js';

export const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Something went wrong on the server';
    sendError(res, message, statusCode);
};
