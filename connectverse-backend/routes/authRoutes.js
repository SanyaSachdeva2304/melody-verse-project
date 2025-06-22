// Import express to create routes
const express = require('express');

// Create a router object from express
const router = express.Router();

// Import controller functions for register and login
const { registerUser, loginUser } = require('../controllers/authController');

// =================== ROUTES ===================

// @route   POST /api/register
// @desc    Registers a new user
// @access  Public (Anyone can register)
router.post('/register', registerUser);

// @route   POST /api/login
// @desc    Logs in an existing user and returns JWT token
// @access  Public (Anyone can login)
router.post('/login', loginUser);

// Export the router to be used in server.js
module.exports = router;
