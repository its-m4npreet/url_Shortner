import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoMoon } from "react-icons/io5";
import { FiSun, FiLogOut } from "react-icons/fi";
import { useTheme } from '../context/ThemeContext';
import { MdHistory } from "react-icons/md";
import { FaUser } from "react-icons/fa";

export const Navbar = ({ onHistoryClick, isLoggedIn, user, onLogout }) => {
  const [showDropdown, setShowDropdown] = useState(false);
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
    <nav className="w-full">
      <div className="px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
            Shorrtly
          </Link>
        </div>

        {/* Right Section - Auth or Theme Toggle */}
        <div className="flex items-center gap-3">
          {!isLoggedIn ? (
            // Login/Signup Buttons
            <>
              <button
                onClick={handleLogin}
                className="px-5 py-2 text-gray-700 dark:text-white hover:text-gray-500 dark:hover:text-gray-300 transition-colors duration-200 flex items-center gap-2"
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
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-200 font-medium"
              >
                Register Now
              </button>
            </>
          ) : (
            <div className='flex justify-around items-center gap-2'>
             {/* Theme Toggle for Logged-in Users */}
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

            {/* users history */}
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
                className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-200"
                aria-label="User menu"
              >
                {user?.name?.charAt(0).toUpperCase() || <FaUser className="w-4 h-4" />}
              </button>

              {/* Dropdown Menu */}
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-[#0a0a0a] rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50">
                  {/* User Info */}
                  <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 flex items-center ">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
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
      </div>
    </nav>
  );
};