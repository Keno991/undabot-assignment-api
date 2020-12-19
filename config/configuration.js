import dotenv from 'dotenv/config';

export default {
    environment: process.env.NODE_ENV || 'development',
    baseUrl: process.env.BASEURL || 'http://localhost:3000',
}