const pool = require('../configDB/database');

// Function to create users table
async function createUsersTable() {
  try {
    const connection = await pool.getConnection();
    await connection.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL
      )
    `);
    console.log('Users table created successfully');
    connection.release();
  } catch (error) {
    console.error('Error creating users table:', error);
  }
}

// Export the createUsersTable function
module.exports = {
  createUsersTable
};
