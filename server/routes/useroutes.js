// Import required modules
const express = require('express');
const {signUp,login}= require('../controllers/usercontroller')
// Create an instance of Express Router
const router = express.Router();


//Signup function
router.post('/signup', signUp);
router.post('/login',login)

// Export the router
module.exports = router;