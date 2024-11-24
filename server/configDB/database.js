// Import the dotenv package
require('dotenv').config();
// Import the mysql2 package
const mysql = require('mysql2');

// Create a connection pool using environment variables
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

try {
  const result = await pool.query('YOUR QUERY HERE');
  console.log(result);
} catch (err) {
  console.error('Database connection error:', err);
}


// Promisify the pool
const promisePool = pool.promise();

console.log("database in data");

// Export the pool for use in other parts of the application
const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET;
module.exports = promisePool;

