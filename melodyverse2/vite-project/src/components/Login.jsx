// components/Login.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  // State to hold email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  // Function runs on form submission
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("All fields are required");
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/login', {
        email,
        password
      });

      // Save JWT token to localStorage
      localStorage.setItem('token', res.data.token);
      toast.success("Login successful!");

      // Redirect to home page
      navigate('/');
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-indigo-600">Login to MelodyVerse</h2>
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-96 space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border border-gray-300 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border border-gray-300 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700"
        >
          Login
        </button>
        <p className="mt-4 text-sm text-gray-600">
          Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign up here</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
