"use client";
import { useState } from 'react';
import React from 'react';

function Page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginError(''); // Clear any previous error

    // Simulate API call (replace with your actual API endpoint)
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Handle successful login (e.g., redirect user)
        console.log('Login successful!');
        // window.location.href = '/dashboard'; // Example redirection
      } else {
        const errorData = await response.json();
        setLoginError(errorData?.message || 'Invalid email or password.');
      }
    } catch (error) {
      console.error('Login failed:', error);
      setLoginError('An unexpected error occurred.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-indigo-300 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="bg-indigo-500 py-4 px-6 text-white text-center font-semibold text-xl tracking-wide">
          Log In to Your Account
        </div>
        <form onSubmit={handleSubmit} className="py-8 px-6 space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Your Password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {loginError && <p className="text-red-500 text-xs italic">{loginError}</p>}
          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 rounded-md focus:outline-none focus:shadow-outline transition duration-300"
          >
            Log In
          </button>
          <div className="mt-4 text-center">
            <a href="/forgotpassword" className="inline-block text-sm text-indigo-500 hover:underline">
              Forgot your password?
            </a>
          </div>
        </form>
        <div className="py-4 px-6 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <a href="/signup" className="text-indigo-500 hover:underline font-semibold">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}

export default Page;