const env = process.env.NODE_ENV;
const envProduction = (env === 'production');

module.exports = {
    webpackHost: 'localhost',
    webpackPort: '3001',
    webpackUrl: 'http://localhost:3001',
    serverHost: 'localhost',
    serverPort: envProduction ? '80' : '3000',
    serverUrl: envProduction ? 'http://localhost' : 'http://localhost:3000'
};