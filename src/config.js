module.exports = {
  API_BASE_URL:
        process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080',
  PORT: process.env.PORT || 8080,
  CLIENT_ORIGIN: process.env.CLIENT_ORIGIN || 'http://localhost:3000',
};
