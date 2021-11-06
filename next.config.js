module.exports = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.NODE_ENV === 'production' ? 'https://reddit-timer-app.vercel.app' : 'http://localhost:3000',
  },
};
