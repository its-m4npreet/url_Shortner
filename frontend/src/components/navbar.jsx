import { useState } from 'react';

export const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleLogin = () => {
    // Add your login logic here
    console.log('Login clicked');
  };

  const handleSignup = () => {
    // Add your signup logic here
    console.log('Signup clicked');
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Add theme toggle logic here (e.g., update document root class)
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className=" w-full">
      <div className="px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Linkly
          </h1>
        </div>

        {/* Right Section - Auth or Theme Toggle */}
        <div className="flex items-center gap-3">
          {!isLoggedIn ? (
            // Login/Signup Buttons
            <>
              <button
                onClick={handleLogin}
                className="px-5 py-2 text-white hover:text-gray-300 transition-colors duration-200 flex items-center gap-2"
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
            // Theme Toggle for Logged-in Users
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                // Sun icon for light mode
                <svg
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                // Moon icon for dark mode
                <svg
                  className="w-5 h-5 text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};