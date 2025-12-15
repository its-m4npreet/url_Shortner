import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoMoon } from "react-icons/io5";
import { FiSun, FiLogOut } from "react-icons/fi";
import { useTheme } from '../context/ThemeContext';
import { MdHistory } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

export const Navbar = ({ onHistoryClick, isLoggedIn, user, onLogout }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const dropdownRef = useRef(null);
  const { isDarkMode, toggleTheme } = useTheme();
  const navigate = useNavigate();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    if (showDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDropdown]);

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  const handleLogout = () => {
    setShowDropdown(false);
    onLogout();
    navigate('/');
  };

  return (
    <nav className="w-full bg-white dark:bg-[#030303] border-b border-gray-200 dark:border-gray-800">
      <div className="px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link to="/" className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
            Shorrtly
          </Link>
        </div>

        {/* Theme Toggle - Always visible on all screens */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 border border-gray-300 dark:border-gray-500 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 cursor-pointer text-gray-700 dark:text-white"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              // Sun icon for light mode
             <FiSun />
            ) : (
              // Moon icon for dark mode
             <IoMoon /> 
            )}
          </button>

          {/* Desktop Menu - Hidden on mobile */}
          <div className="hidden sm:flex items-center gap-3">
            {!isLoggedIn ? (
              // Login/Signup Buttons
              <>
                <button
                  onClick={handleLogin}
                  className="px-4 py-2 text-gray-700 dark:text-white hover:text-gray-500 dark:hover:text-gray-300 transition-colors duration-200 flex items-center gap-2 text-sm"
                >
                  Login
                  <svg 
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </button>
                <button
                  onClick={handleSignup}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-200 font-medium text-sm"
                >
                  Register
                </button>
              </>
            ) : (
              <div className='flex justify-around items-center gap-2'>
                {/* History Button */}
                <button
                  onClick={onHistoryClick}
                  className="p-2 border border-gray-300 dark:border-gray-500 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 cursor-pointer text-gray-700 dark:text-white"
                  aria-label="User History">
                    <MdHistory />
                </button>

                {/* User Profile Dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-200 text-sm"
                    aria-label="User menu"
                  >
                    {user?.name?.charAt(0).toUpperCase() || <FaUser className="w-4 h-4" />}
                  </button>

                  {/* Dropdown Menu */}
                  {showDropdown && (
                    <div className="absolute right-0 mt-2 w-48 sm:w-56 bg-white dark:bg-[#0a0a0a] rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50">
                      {/* User Info */}
                      <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 flex items-center ">
                        <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                         {user?.name}
                        </p>
                        
                      </div>

                      {/* Logout Button */}
                      <button
                        onClick={handleLogout}
                        className="w-full px-4 py-3 text-left text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-[#ff02021a] transition-colors flex items-center gap-2 rounded-b-lg"
                      >
                        <FiLogOut className="w-4 h-4" />
                        Logout
                      </button>
                    </div>
                  )}
                </div>
                 
                </div>
            )}
          </div>

          {/* Mobile Menu Button - Hidden on desktop */}
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="sm:hidden p-2 text-gray-700 dark:text-white"
            aria-label="Toggle menu"
          >
            {showMobileMenu ? <IoClose className="w-6 h-6" /> : <GiHamburgerMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Visible only on mobile */}
      {showMobileMenu && (
        <div className="sm:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-[#030303]">
          <div className="px-4 py-4 space-y-3">
            {!isLoggedIn ? (
              <>
                <button
                  onClick={() => {
                    handleLogin();
                    setShowMobileMenu(false);
                  }}
                  className="w-full px-4 py-2 text-gray-700 dark:text-white hover:text-gray-500 dark:hover:text-gray-300 transition-colors duration-200 text-left text-sm"
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    handleSignup();
                    setShowMobileMenu(false);
                  }}
                  className="w-full px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-200 font-medium text-sm"
                >
                  Register Now
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    onHistoryClick();
                    setShowMobileMenu(false);
                  }}
                  className="w-full px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors flex items-center gap-2 text-sm"
                >
                  <MdHistory className="w-5 h-5" />
                  History
                </button>
                <button
                  onClick={() => {
                    handleLogout();
                    setShowMobileMenu(false);
                  }}
                  className="w-full px-4 py-2 text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors flex items-center gap-2 text-sm"
                >
                  <FiLogOut className="w-5 h-5" />
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};