// src/components/Button.jsx
import React from 'react';

const Button = ({ children, onClick, className = '' }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-md font-semibold transition-colors
      bg-blue-600 text-white hover:bg-blue-700
      dark:bg-blue-500 dark:hover:bg-blue-600
      ${className}`}
  >
    {children}
  </button>
);

export default Button;
