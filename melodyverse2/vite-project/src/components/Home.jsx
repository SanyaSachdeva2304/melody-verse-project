// Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  // Logout handler (clear token & redirect to login)
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove saved JWT token
    navigate('/login');               // Redirect to login page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-100 to-blue-200">
      <h1 className="text-4xl font-bold text-green-800 mb-4">🎵 Welcome to MelodyVerse!</h1>
      <p className="text-lg text-gray-700 mb-8">You're now logged in 🎉</p>
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded shadow-lg transition"
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
