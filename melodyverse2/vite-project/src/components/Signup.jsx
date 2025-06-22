// Signup.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword, termsAccepted } = formData;

    // Basic validations
    if (!name || !email || !password || !confirmPassword) {
      return toast.error('⚠️ Please fill all required fields');
    }

    if (password !== confirmPassword) {
      return toast.error('❌ Passwords do not match');
    }

    if (!termsAccepted) {
      return toast.error('📌 Please accept the terms and conditions');
    }

    try {
      // API call to backend
      const res = await axios.post('http://localhost:5000/api/register', {
        name,
        email,
        password,
      });

      toast.success(res.data.message);
      navigate('/login'); // Redirect to login page

    } catch (err) {
      toast.error(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-green-600">Create Account</h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full p-3 border rounded mb-4"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-3 border rounded mb-4"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-3 border rounded mb-4"
          value={formData.password}
          onChange={handleChange}
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          className="w-full p-3 border rounded mb-4"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        <label className="flex items-center text-sm mb-4">
          <input
            type="checkbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
            className="mr-2"
          />
          I agree to the Terms and Conditions
        </label>

        <button
          type="submit"
          className="bg-green-600 text-white w-full py-3 rounded hover:bg-green-700 transition duration-300"
        >
          Sign Up
        </button>

        <p className="mt-4 text-center text-sm">
          Already have an account?{' '}
          <span
            onClick={() => navigate('/login')}
            className="text-green-600 cursor-pointer underline"
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Signup;
