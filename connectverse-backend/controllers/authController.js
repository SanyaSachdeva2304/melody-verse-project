// Import required modules
const User = require('../models/user'); // User model
const bcrypt = require('bcryptjs'); // To hash passwords
const jwt = require('jsonwebtoken'); // To generate tokens

// ------------------- SIGNUP LOGIC -------------------
exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body; // Extracting user data

  try {
    // Check if user already exists in DB
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user using the User model
    const newUser = new User({
      name,
      email,
      password: hashedPassword
    });

    // Save the new user in the database
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Register Error:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};

// ------------------- LOGIN LOGIC -------------------
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {

    // Check if user with given email exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Compare the entered password with stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    
    console.log('🔐 JWT_SECRET is:', process.env.JWT_SECRET);

    // Generate JWT token (expires in 1 hour)
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(200).json({
      message: 'Login successful',
      token
    });

  } catch (err) {
    console.error('Login Error:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};
