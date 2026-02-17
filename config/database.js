const mysql = require('mysql2/promise');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

// Database configuration
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'agri_ai',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

// Create connection pool
let pool;

const initializeDatabase = async () => {
  try {
    pool = mysql.createPool(dbConfig);
    console.log('✅ Database pool created successfully');
    return pool;
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    throw error;
  }
};

// Get pool instance
const getPool = () => {
  if (!pool) {
    throw new Error('Database pool not initialized. Call initializeDatabase first.');
  }
  return pool;
};

// Execute query
const executeQuery = async (query, values = []) => {
  try {
    const connection = await getPool().getConnection();
    const [results] = await connection.execute(query, values);
    connection.release();
    return results;
  } catch (error) {
    console.error('Query error:', error);
    throw error;
  }
};

module.exports = {
  initializeDatabase,
  getPool,
  executeQuery,
  dbConfig
};
