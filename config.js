/**
 * Configuration file for the Agriculture Information Portal
 * This file contains environment-specific and application settings
 */

const config = {
  // Server Configuration
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',

  // Session Configuration
  session: {
    secret: process.env.SESSION_SECRET || 'your-secret-key-change-in-production',
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: process.env.NODE_ENV === 'production', // Set to true in production with HTTPS
      httpOnly: true,
      maxAge: parseInt(process.env.SESSION_TIMEOUT) || 24 * 60 * 60 * 1000 // 24 hours
    }
  },

  // Application Settings
  app: {
    name: process.env.APP_NAME || 'Agriculture Information Portal',
    url: process.env.APP_URL || 'http://localhost:3000'
  },

  // Database Configuration (for future use)
  database: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'agriculture_db'
  }
};

module.exports = config;
