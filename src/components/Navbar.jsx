// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logoCompany from '../assets/images/logo-company.png'

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto">
        <nav className="flex items-center justify-between p-4">
          {/* Left Section: Logo and Search */}
          <div className="flex items-center space-x-8 flex-1">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src={logoCompany}
                alt="Company Logo" 
                className="h-12 w-auto"
              />
            </Link>

            {/* Search Bar */}
            <div className="max-w-md w-full">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                />
                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                  {/* Search Icon - ganti dengan icon Anda */}
                  <svg 
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section: Navigation */}
          <nav className="flex items-center space-x-6 ml-8">
  <Link 
    to="/" 
    className="text-gray-700 px-4 py-2 rounded hover:bg-purple-700 hover:text-white transition-colors"
  >
    HOME
  </Link>
  <Link 
    to="/about" 
    className="bg-white text-gray-600 px-4 py-2 rounded hover:bg-purple-700 hover:text-white transition-colors"
  >
    ABOUT
  </Link>
  <Link 
    to="/contact" 
    className="bg-white text-gray-600 px-4 py-2 rounded hover:bg-purple-700 hover:text-white transition-colors"
  >
    CONTACT US
  </Link>
</nav>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;