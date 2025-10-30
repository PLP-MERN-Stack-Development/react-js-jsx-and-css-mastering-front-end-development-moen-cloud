// src/components/SearchBar.jsx
import React from 'react';

const SearchBar = ({ value, onChange }) => (
  <div className="mb-6">
    <input
      type="text"
      placeholder="Search articles..."
      value={value}
      onChange={onChange}
      className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
    />
  </div>
);

export default SearchBar;
