export const Features = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#030303] px-3 sm:px-4 py-8 sm:py-16 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 sm:mb-6 text-gray-900 dark:text-white leading-tight">
          How to Use Shorrtly
        </h1>
        
        <p className="text-gray-600 dark:text-gray-400 text-center mb-8 sm:mb-12 text-sm sm:text-base px-2">
          Follow these simple steps to shorten your URLs and manage them efficiently
        </p>

        {/* Steps Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {/* Step 1 */}
                    <div className="bg-white dark:bg-[#030303] rounded-2xl p-4 sm:p-8 border border-gray-200 dark:border-gray-800 transition-all duration-300">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex-1 min-w-0">
                <h2 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">Click "Shorten Now!"</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-xs sm:text-base">
                  Paste or type the long URL you want to shorten in the input field. You can also enable "Auto Paste from Clipboard" to automatically fill the URL from your clipboard.
                </p>
                <div className=" bg-gray-100 dark:bg-[#030303] rounded-lg p-3 sm:p-4 border border-gray-200 dark:border-gray-700 overflow-x-auto">
                  <code className="text-blue-400 text-xs sm:text-sm break-all">
                    Example: https://www.example.com/v...
                  </code>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white dark:bg-[#030303] rounded-2xl p-4 sm:p-8 border border-gray-200 dark:border-gray-800  transition-all duration-300">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex-1 min-w-0">
                <h2 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">Set Expiration Time</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-xs sm:text-base">
                  Choose how long you want your shortened link to remain active. Select from the dropdown menu:
                </p>
                <ul className="text-gray-600 dark:text-gray-400 space-y-1 sm:space-y-2 ml-4 sm:ml-6 text-xs sm:text-base">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400 flex-shrink-0">•</span>
                    <span>1 hour - for temporary shares</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400 flex-shrink-0">•</span>
                    <span>6 hours - for short-term campaigns</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-pink-400 flex-shrink-0">•</span>
                    <span>12 hours - Ideal for daily links</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400 flex-shrink-0">•</span>
                    <span>24 hours - Best for one-day events</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white dark:bg-[#030303] rounded-2xl p-4 sm:p-8 border border-gray-200 dark:border-gray-800 transition-all duration-300">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex-1 min-w-0">
                <h2 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">Click "Shorten Now!"</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-xs sm:text-base">
                  Hit the "Shorten Now!" button and your shortened URL will be generated instantly. The short link will appear below the input field.
                </p>
                <div className="bg-gray-100 dark:bg-[#030303] rounded-lg p-3 sm:p-4 border border-gray-200 dark:border-gray-700 overflow-x-auto">
                  <code className="text-green-400 text-xs sm:text-sm break-all">
                    Result: https://Shorrtly.app/abc123
                  </code>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white dark:bg-[#030303] rounded-2xl p-4 sm:p-8 border border-gray-200 dark:border-gray-800 transition-all duration-300">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex-1 min-w-0">
                <h2 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">Copy & Share</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-xs sm:text-base">
                  Copy your shortened URL with one click and share it anywhere - social media, emails, messages, or documents. Your short link will redirect users to the original URL.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-12 sm:mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center">Additional Features</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Free Tier */}
            <div className=" rounded-xl p-4 sm:p-6 border  border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 min-w-0">
                <svg className="w-6 sm:w-8 h-6 sm:h-8 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Free Usage</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-base">
                Create up to 3 shortened links without registration. Perfect for quick, one-time shares.
              </p>
            </div>

            {/* Registration Benefits */}
            <div className=" rounded-xl p-4 sm:p-6 border  border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 min-w-0">
                <svg className="w-6 sm:w-8 h-6 sm:h-8 text-purple-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Register for More</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-base">
                Create an account to generate unlimited short links and access advanced tracking features.
              </p>
            </div>

            {/* Auto Paste */}
            <div className=" rounded-xl p-4 sm:p-6 border  border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 min-w-0">
                <svg className="w-6 sm:w-8 h-6 sm:h-8 text-pink-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z" />
                  <path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z" />
                </svg>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Auto Paste</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-base">
                Enable clipboard auto-paste to automatically fill the URL field with copied links.
              </p>
            </div>

            {/* Expiration Control */}
            <div className=" rounded-xl p-4 sm:p-6 border  border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 min-w-0">
                <svg className="w-6 sm:w-8 h-6 sm:h-8 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Time Control</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-base">
                Set custom expiration times to ensure your links are only active when you need them.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
