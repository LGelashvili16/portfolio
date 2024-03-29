import React from 'react';

const GlowingButton = () => {
  return (
    <a href="#skills" className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-75 transition duration-1000 group-hover:opacity-100  group-hover:blur-lg group-hover:duration-200"></div>
      <button className="relative px-5 py-3 bg-black rounded-lg leading-none flex items-center space-x-2">
        <span className="text-indigo-500 group-hover:text-white transition duration-200">
          Scroll down
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 text-indigo-500 group-hover:text-white transition duration-200"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
          />
        </svg>
      </button>
    </a>
  );
};

export default GlowingButton;
