import { useState } from 'react';
import { IoMoon } from "react-icons/io5";
import { FiSun } from "react-icons/fi";
import { useTheme } from '../context/ThemeContext';
import { MdHistory } from "react-icons/md";
import { TiInfoLarge } from "react-icons/ti";


export const Navbar = ({ onInfoClick }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const { isDarkMode, toggleTheme } = useTheme();

  const handleLogin = () => {
    // Add your login logic here
    console.log('Login clicked');
  };

  const handleSignup = () => {
    // Add your signup logic here
    console.log('Signup clicked');
  };

  return (
    <nav className="w-full">
      <div className="px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Shortly
          </h1>
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
              className="p-2 border border-gray-300 dark:border-gray-500 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 cursor-pointer text-gray-700 dark:text-white"
              aria-label="User History">
                <MdHistory />
            </button>

              {/* how to use information */}
             <button
              onClick={onInfoClick}
              className="p-2 border border-gray-300 dark:border-gray-500 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 cursor-pointer text-gray-700 dark:text-white"
              aria-label="How to Use">
                <TiInfoLarge />
            </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};