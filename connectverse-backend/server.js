// server.js

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

// ✅ MongoDB connect
const connectDB = require('./config/db');

// ✅ Load .env
dotenv.config();

// ✅ Call DB connection
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require('./routes/authRoutes');
app.use('/api', authRoutes);

// Test Route
app.get('/', (req, res) => {
  res.send('✅ Backend is running!');
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
