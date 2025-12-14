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

      // Use relative path to work with Vite proxy
      const res = await fetch('/generate', {
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
    <div className="flex flex-col items-center justify-center px-4 py-16 max-w-4xl mx-auto">
      {/* Heading */}
      <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 text-gray-900 dark:text-white">
        Shorten Your Loooong Links 
      </h1>

      {/* Paragraph */}
      <p className="text-gray-600 dark:text-gray-400 text-center mb-8 max-w-xl">
        Shortly is an efficient and easy-to-use URL shortening service that streamlines your online experience.
      </p>

      {/* Search Bar */}
      <div className="w-full max-w-2xl relative">
        <div className="flex items-center bg-gray-100 dark:bg-transparent rounded-full px-4 py-3 border border-gray-300 dark:border-gray-700 focus-within:border-blue-500 transition-colors">
          <FaLink className='text-[#242424] dark:text-white mr-2'/>
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter the link here"
            className="flex-1 bg-transparent text-gray-900 dark:text-white outline-none placeholder-gray-400 dark:placeholder-gray-500"
          />
          
          <button
            onClick={handleShorten}
            disabled={loading}
            className="ml-4 px-8 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-full transition-colors duration-200 font-medium"
          >
            {loading ? 'Shortening…' : 'Shorten Now!'}
          </button>
        </div>

        {/* Additional Info - Auto Paste and Expires */}
        <div className="flex items-center justify-center gap-6 mt-4 text-sm">

          <div className="flex items-center text-gray-600 dark:text-gray-500">
            <label htmlFor="expires" className="mr-2">Expires within</label>
            <select 
              id="expires"
              className="bg-gray-100 dark:bg-[#000000] text-gray-900 dark:text-white px-3 py-1 rounded-md border border-gray-300 dark:border-gray-700 outline-none"
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
          <p className="text-center text-red-500 text-sm mt-3">{error}</p>
        )}

        {/* Shortened URL Result */}
        {shortUrl && (
          <div className="mt-6 text-center ">
            <p className="text-gray-700 dark:text-gray-300">Your shortened link:</p>
            <div className="mt-2 flex items-center justify-center">
            <a
              href={shortUrl}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline break-all"
            >
              {shortUrl}
            </a>
             <button
                                    onClick={() => copyToClipboard(shortUrl)}
                                    className="p-1.5 hover:bg-gray-200 dark:hover:bg-gray-800 rounded transition-colors ml-2 flex items-center justify-center"
                                    title="Copy"
                                  >
                                    <FiCopy className="w-4 h-4 text-gray-600 dark:text-gray-400 " />
                                  </button>
            </div>
            
          </div>
        )}

        {/* Shortened URL Info Text */}
        <p className="text-center text-gray-500 dark:text-gray-600 text-xs mt-6">
          You can create <span className="text-blue-500">03</span> more links. Register Now to create more shortened links and track them easier!
          <button className="ml-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
            <svg className="w-4 h-4 inline" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
            </svg>
          </button>
        </p>
      </div>
    </div>
  );
};