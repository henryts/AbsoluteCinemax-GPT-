import React from 'react';

function Header() {
  return (
    <header className="bg-black bg-opacity-90 fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50">
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          className="w-32 h-16"
          src="data:image/png;base64,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"
          alt="Logo"
        />
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-6 text-white font-semibold">
        <a href="#" className="hover:text-gray-300">Home</a>
        <a href="#" className="hover:text-gray-300">TV Shows</a>
        <a href="#" className="hover:text-gray-300">Movies</a>
        <a href="#" className="hover:text-gray-300">New & Popular</a>
        <a href="#" className="hover:text-gray-300">My List</a>
      </nav>

      {/* User Actions */}
      <div className="flex items-center space-x-4">
        <button className="text-white hover:text-gray-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </button>
        <button className="bg-red-600 text-white w-20 h-10 rounded-md hover:bg-red-700 transition">Log In</button>
      </div>
    </header>
  );
}

export default Header;