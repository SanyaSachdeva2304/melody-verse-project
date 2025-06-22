// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import from components folder
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home'; // You said you’ve created it too

function App() {
  return (
    <Router>
      <Routes>
        {/* Signup Route */}
        <Route path="/signup" element={<Signup />} />

        {/* Login Route */}
        <Route path="/login" element={<Login />} />

        {/* Home Route - after login */}
        <Route path="/" element={<Home />} />

        {/* Catch-all Route - any unknown route will redirect to login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
