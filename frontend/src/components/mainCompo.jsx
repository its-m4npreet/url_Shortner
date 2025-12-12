import { useState } from 'react';

export const MainCompo = () => {
  const [url, setUrl] = useState('');

  const handleShorten = () => {
    // Add your URL shortening logic here
    console.log('Shortening URL:', url);
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 py-16 max-w-4xl mx-auto">
      {/* Heading */}
      <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
        Shorten Your Loooong Links :)
      </h1>

      {/* Paragraph */}
      <p className="text-gray-400 text-center mb-8 max-w-xl">
        Linkly is an efficient and easy-to-use URL shortening service that streamlines your online experience.
      </p>

      {/* Search Bar */}
      <div className="w-full max-w-2xl relative">
        <div className="flex items-center bg-[#1a1a2e] rounded-full px-6 py-4 border border-gray-700 focus-within:border-blue-500 transition-colors">
          <svg 
            className="w-5 h-5 text-gray-500 mr-3" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" 
            />
          </svg>
          
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter the link here"
            className="flex-1 bg-transparent text-white outline-none placeholder-gray-500"
          />
          
          <button
            onClick={handleShorten}
            className="ml-4 px-8 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-200 font-medium"
          >
            Shorten Now!
          </button>
        </div>

        {/* Additional Info - Auto Paste and Expires */}
        <div className="flex items-center justify-center gap-6 mt-4 text-sm">
          <div className="flex items-center text-gray-500">
            <input
              type="checkbox"
              id="autoPaste"
              className="mr-2 w-4 h-4 rounded accent-blue-600"
            />
            <label htmlFor="autoPaste" className="flex items-center gap-1">
              Auto Paste from Clipboard
              <button className="text-gray-400 hover:text-gray-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path 
                    fillRule="evenodd" 
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </button>
            </label>
          </div>

          <div className="flex items-center text-gray-500">
            <label htmlFor="expires" className="mr-2">Expires within</label>
            <select 
              id="expires"
              className="bg-[#1a1a2e] text-white px-3 py-1 rounded-md border border-gray-700 outline-none focus:border-blue-500"
              defaultValue="24"
            >
              <option value="1">1 hour</option>
              <option value="6">6 hours</option>
              <option value="12">12 hours</option>
              <option value="24">24 hours</option>
            </select>
          </div>
        </div>

        {/* Shortened URL Info Text */}
        <p className="text-center text-gray-600 text-xs mt-6">
          You can create <span className="text-blue-500">03</span> more links. Register Now to create more shortened links and track them easier!
          <button className="ml-2 text-gray-400 hover:text-gray-300">
            <svg className="w-4 h-4 inline" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
            </svg>
          </button>
        </p>
      </div>
    </div>
  );
};