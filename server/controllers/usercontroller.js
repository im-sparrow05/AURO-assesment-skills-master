// Import required modules
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../configDB/database');
const { createUsersTable } = require('../model/user_schema');
const asyncHandler = require('express-async-handler');
const {generateToken}= require('../utils/jwt_utils')
// Function to handle user registration (sign up)
const signUp = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Create the users table if it doesn't exist
    await createUsersTable();
    console.log("Going to Usertable")
    console.log(username)
    console.log(password)
    console.log(email)
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user into the database
    await pool.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, hashedPassword]);

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    // Handle database insertion errors
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
});

// Function to handle user login
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  try {
    // Query the database to find the user by email
    const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);

    // If no user found with the provided email, return error
    if (rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Retrieve user data from the database
    const user = rows[0];

    // Compare the provided password with the hashed password from the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    // If passwords don't match, return error
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Incorrect password' });
    }

    // If passwords match, generate JWT token
    const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    // Send token as response
    res.status(200).json({ message:`${user.username} signed in`,token });
    console.log(token)
  } catch (error) {
    // Handle database errors
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'Failed to login' });
  }
});

// Export the signUp and login functions
module.exports = {
  signUp,
  login
};
