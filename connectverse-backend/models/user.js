// Import mongoose to define schema and interact with MongoDB
const mongoose = require('mongoose');

// Create a new schema for the user
const userSchema = new mongoose.Schema({
  // User's name - required field, with extra spaces trimmed
  name: {
    type: String,
    required: true,
    trim: true
  },

  // User's email - required and must be unique in database
  email: {
    type: String,
    required: true,
    unique: true
  },

  // User's password - required (we'll hash it before saving)
  password: {
    type: String,
    required: true
  },

  // Automatically set the date when user is created
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Export the model so we can use it in other files (like controllers/routes)
module.exports = mongoose.model('User', userSchema);
