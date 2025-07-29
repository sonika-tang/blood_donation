import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo';
import React from 'react';

const Navbar = ({ isLoggedIn, onLogout }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinkClass = ({ isActive }) => 
    `px-3 py-2 ${isActive ? 'text-red-600 font-medium' : 'text-gray-800 hover:text-red-500'} transition-colors`;

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Logo />
              <span className="ml-2 text-xl font-bold text-gray-800 hidden sm:block">LifeBlood</span>
            </Link>
            <div className="hidden md:ml-8 md:flex md:space-x-2">
              <NavLink to="/" className={navLinkClass} end>Home</NavLink>
              <NavLink to="/donation" className={navLinkClass}>Donation</NavLink>
              <NavLink to="/request" className={navLinkClass}>Request</NavLink>
              <NavLink to="/inventory" className={navLinkClass}>Inventory</NavLink>
              <NavLink to="/history" className={navLinkClass}>History</NavLink>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <button 
                onClick={onLogout}
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Logout
              </button>
            ) : (
              <>
                <Link to="/login" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                  Login
                </Link>
                <Link to="/signup" className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                  Sign up
                </Link>
              </>
            )}
          </div>

          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-red-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white pt-2 pb-3 border-t">
          <div className="px-2 space-y-1">
            <NavLink to="/" className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'text-red-600 bg-red-50' : 'text-gray-800 hover:bg-gray-50 hover:text-red-500'}`} onClick={() => setMobileMenuOpen(false)} end>
              Home
            </NavLink>
            <NavLink to="/donation" className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'text-red-600 bg-red-50' : 'text-gray-800 hover:bg-gray-50 hover:text-red-500'}`} onClick={() => setMobileMenuOpen(false)}>
              Donation
            </NavLink>
            <NavLink to="/inventory" className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'text-red-600 bg-red-50' : 'text-gray-800 hover:bg-gray-50 hover:text-red-500'}`} onClick={() => setMobileMenuOpen(false)}>
              Inventory
            </NavLink>
            <NavLink to="/request" className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'text-red-600 bg-red-50' : 'text-gray-800 hover:bg-gray-50 hover:text-red-500'}`} onClick={() => setMobileMenuOpen(false)}>
              Request
            </NavLink>
            <NavLink to="/history" className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'text-red-600 bg-red-50' : 'text-gray-800 hover:bg-gray-50 hover:text-red-500'}`} onClick={() => setMobileMenuOpen(false)}>
              History
            </NavLink>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-2 space-y-1">
              {isLoggedIn ? (
                <button
                  onClick={() => {
                    onLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-50 hover:text-red-500"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link to="/login" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-50 hover:text-red-500" onClick={() => setMobileMenuOpen(false)}>
                    Login
                  </Link>
                  <Link to="/signup" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-50 hover:text-red-500" onClick={() => setMobileMenuOpen(false)}>
                    Sign up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;