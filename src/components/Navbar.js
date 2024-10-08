// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-white p-4 text-black shadow-md">
    <div className="container mx-auto flex justify-between items-center h-full">
      {/* Logo/Brand Name */}
      <h1 className="text-2xl font-bold">Review & Rate</h1>

      {/* Sign Up, Login, and Search Box */}
      <div className="flex space-x-4 items-center">
        {/* Search Box */}
        <input
          type="text"
          placeholder="Search..."
          className="w-[300px] p-2 rounded-lg border border-gray-300 focus:outline-none"
        />
        
        {/* Sign Up and Login Links */}
        <Link to="/" className="mx-2 text-black hover:underline">Sign Up</Link>
        <Link to="/" className="mx-2 text-black hover:underline">Login</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
