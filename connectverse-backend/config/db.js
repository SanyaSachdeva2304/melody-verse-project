// config/db.js
const mongoose = require('mongoose');
console.log('db.js file loaded');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error(' MongoDB connection failed:', error.message);
    process.exit(1); // Force exit if connection fails
  }
};

module.exports = connectDB;
