import { useState } from 'react';
import { FaLink } from "react-icons/fa6";
import { FiCopy } from 'react-icons/fi';

export const MainCompo = ({ onUrlShortened }) => {
  const [url, setUrl] = useState('');
  const [expiresHours, setExpiresHours] = useState('24');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // You can add a toast notification here
  };

  const handleShorten = async () => {
    setError('');
    setShortUrl('');
    if (!url.trim()) {
      setError('Please enter a valid URL');
      return;
    }

    try {
      setLoading(true);
      // Calculate expireAt based on selected hours
      const hours = Number(expiresHours) || 24;
      const expireAt = new Date(Date.now() + hours * 60 * 60 * 1000).toISOString();

      // Use absolute backend URL
      const backendUrl = import.meta.env.VITE_BACKEND_URL ;
      const res = await fetch(`${backendUrl}/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ originalUrl: url.trim(), expireAt })
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Failed to shorten URL');
      }

      const data = await res.json();
      setShortUrl(data.shortUrl);
      // Add to history if callback provided
      if (onUrlShortened) {
        onUrlShortened(data.shortUrl, url.trim(), expiresHours);
      }
    } catch (e) {
      setError(e.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center px-3 sm:px-4 py-8 sm:py-16 max-w-4xl mx-auto w-full">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-3 sm:mb-4 text-gray-900 dark:text-white leading-tight">
        Shorten Your Loooong Links 
      </h1>

      {/* Paragraph */}
      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 text-center mb-6 sm:mb-8 max-w-xl px-2">
        Shorrtly is an efficient and easy-to-use URL shortening service that streamlines your online experience.
      </p>

      {/* Search Bar */}
      <div className="w-full max-w-2xl relative px-0">
        <div className="flex flex-col sm:flex-row items-center bg-gray-100 dark:bg-transparent rounded-lg sm:rounded-full px-3 sm:px-4 py-3 border border-gray-300 dark:border-gray-700 focus-within:border-blue-500 transition-colors gap-2 sm:gap-0">
          <FaLink className='hidden sm:block text-[#242424] dark:text-white flex-shrink-0'/>
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter the link here"
            className="flex-1 bg-transparent text-gray-900 dark:text-white outline-none placeholder-gray-400 dark:placeholder-gray-500 w-full px-2 sm:px-0"
          />
          
          <button
            onClick={handleShorten}
            disabled={loading}
            className="w-full sm:w-auto ml-0 sm:ml-4 px-6 sm:px-8 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-lg sm:rounded-full transition-colors duration-200 font-medium text-sm flex-shrink-0"
          >
            {loading ? 'Shortening…' : 'Shorten Now!'}
          </button>
        </div>

        {/* Additional Info - Auto Paste and Expires */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mt-4 text-xs sm:text-sm flex-wrap px-2">

          <div className="flex items-center text-gray-600 dark:text-gray-500 gap-2">
            <label htmlFor="expires" className="whitespace-nowrap">Expires within</label>
            <select 
              id="expires"
              className="bg-gray-100 dark:bg-[#000000] text-gray-900 dark:text-white px-2 sm:px-3 py-1 rounded-md border border-gray-300 dark:border-gray-700 outline-none text-xs sm:text-sm"
              value={expiresHours}
              onChange={(e) => setExpiresHours(e.target.value)}
            >
              <option value="1">1 hour</option>
              <option value="6">6 hours</option>
              <option value="12">12 hours</option>
              <option value="24">24 hours</option>
            </select>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <p className="text-center text-red-500 text-xs sm:text-sm mt-3 px-2">{error}</p>
        )}

        {/* Shortened URL Result */}
        {shortUrl && (
          <div className="mt-6 text-center px-2">
            <p className="text-gray-700 dark:text-gray-300 text-sm">Your shortened link:</p>
            <div className="mt-2 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-0">
            <a
              href={shortUrl}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline break-all text-xs sm:text-sm max-w-xs"
            >
              {shortUrl}
            </a>
             <button
                                    onClick={() => copyToClipboard(shortUrl)}
                                    className="p-1.5 hover:bg-gray-200 dark:hover:bg-gray-800 rounded transition-colors sm:ml-2 flex items-center justify-center flex-shrink-0"
                                    title="Copy"
                                  >
                                    <FiCopy className="w-4 h-4 text-gray-600 dark:text-gray-400 " />
                                  </button>
            </div>
            
          </div>
        )}

        {/* Shortened URL Info Text */}
        <p className="text-center text-gray-500 dark:text-gray-600 text-xs mt-6 px-2 leading-relaxed">
          You can create <span className="text-blue-500">03</span> more links. Register Now to create more shortened links and track them easier!
          <button className="ml-1 sm:ml-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 inline-block">
            <svg className="w-4 h-4 inline" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
            </svg>
          </button>
        </p>
      </div>
    </div>
  );
};