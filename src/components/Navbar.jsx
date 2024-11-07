// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoCompany from '../assets/images/logo-company.png';

const Navbar = ({scrollToSection}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = ({scrollToSection}) => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-transparent shadow-sm">
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
                  className="w-full px-4 py-2 pl-10 pr-4 rounded-lg bg-white border-none focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                />
                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                  {/* Search Icon */}
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

          {/* Right Section: Navigation for Desktop */}
          <div className="hidden sm:flex space-x-6">
            <Link 
              to="/" 
              className="bg-transparent text-white px-4 py-2 rounded hover:bg-slate-700 transition-colors"
            >
              HOME
            </Link>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-white px-4 py-2 rounded hover:bg-slate-700 transition-colors"
            >
              ABOUT
            </button>
            <button 
              onClick={() => scrollToSection('contact')}  
              className="text-white px-4 py-2 rounded hover:bg-slate-700 transition-colors"
            >
              CONTACT US
            </button>
          </div>

                    {/* Hamburger Button for Mobile */}
                    <button
            className="sm:hidden p-2 text-white"
            onClick={toggleNavbar}
          >
            {isOpen ? '✖' : '☰'}
          </button>
        </nav>

        {/* Sidebar Navbar for Mobile */}
        <div
          className={`fixed top-0 right-0 h-full bg-slate-800 text-white transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
          style={{ width: '250px' }} // Sidebar width
        >
          <nav className="flex flex-col items-start p-4 space-y-4">
            <Link
              to="/"
              className="bg-transparent text-white px-4 py-2 rounded hover:bg-slate-700 transition-colors"
              onClick={toggleNavbar} // Close navbar when link is clicked
            >
              HOME
            </Link>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-white px-4 py-2 rounded hover:bg-slate-700 transition-colors"
            >
              ABOUT
            </button>
            <button 
              onClick={() => scrollToSection('contact')}  
              className="text-white px-4 py-2 rounded hover:bg-slate-700 transition-colors"
            >
              CONTACT US
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;