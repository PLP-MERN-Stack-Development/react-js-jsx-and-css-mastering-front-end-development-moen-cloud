// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggleTheme, isDarkMode }) => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold dark:text-white">
        HealthSphere
      </Link>

      <div className="flex items-center space-x-4">
        <Link to="/" className="dark:text-gray-300 hover:text-blue-500">Home</Link>
        <Link to="/about" className="dark:text-gray-300 hover:text-blue-500">About</Link>
        <Link to="/contact" className="dark:text-gray-300 hover:text-blue-500">Contact</Link>

        <button
          onClick={toggleTheme}
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
