'use strict';

module.exports = {
    // Database configuration
    database: {
        host: 'localhost',
        user: 'root',
        password: 'your_password',
        dbName: 'your_db',
    },

    // Server configuration
    server: {
        port: 3000,
        host: 'localhost',
    },

    // API settings
    api: {
        baseURL: 'http://localhost:3000/api',
        timeout: 5000,
    },

    // Logging configurations
    logging: {
        level: 'info',
        filePath: './logs/app.log',
    },
};