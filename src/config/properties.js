module.exports = {
    // The name of the application
    name: 'My Application',
        // The version of the application
        version: '1.0.0',
        // The port to run the application on
        AUTH: {
            SECRET_KEY: 'secret',
        },
        SYSTEM: {
            PORT: 3000,
            HOST: 'localhost',
            CORS: ['http://localhost:3001'],
            DOMAIN: 'http://localhost:3000',
        }
}