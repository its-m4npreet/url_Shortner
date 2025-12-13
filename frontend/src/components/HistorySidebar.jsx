import { IoClose } from "react-icons/io5";
import { MdHistory } from "react-icons/md";
import { FiCopy } from "react-icons/fi";
import { BiLinkExternal } from "react-icons/bi";

export const HistorySidebar = ({ isOpen, onClose, historyData = [] }) => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // You can add a toast notification here
  };

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white dark:bg-[#0a0a0a] border-l border-gray-200 dark:border-gray-800 shadow-2xl z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <MdHistory className="w-6 h-6 text-blue-600" />
            History
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          >
            <IoClose className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 overflow-y-auto h-[calc(100%-4rem)]">
          {historyData.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <MdHistory className="w-16 h-16 text-gray-300 dark:text-gray-700 mb-4" />
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                No history yet
              </p>
              <p className="text-gray-400 dark:text-gray-500 text-xs mt-2">
                Start shortening URLs to see your history here!
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {historyData.map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
                >
                  {/* Timestamp */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {item.timestamp || 'Just now'}
                    </span>
                    <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded">
                      {item.expiresIn || '24h'}
                    </span>
                  </div>

                  {/* Short URL */}
                  <div className="mb-3">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Short URL</p>
                    <div className="flex items-center gap-2">
                      <p className="text-sm text-blue-600 dark:text-blue-400 font-medium truncate flex-1">
                        {item.shortUrl}
                      </p>
                      <button
                        onClick={() => copyToClipboard(item.shortUrl)}
                        className="p-1.5 hover:bg-gray-200 dark:hover:bg-gray-800 rounded transition-colors"
                        title="Copy"
                      >
                        <FiCopy className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                      </button>
                      <a
                        href={item.shortUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 hover:bg-gray-200 dark:hover:bg-gray-800 rounded transition-colors"
                        title="Open"
                      >
                        <BiLinkExternal className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                      </a>
                    </div>
                  </div>

                  {/* Original URL */}
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Original URL</p>
                    <p className="text-xs text-gray-600 dark:text-gray-500 truncate">
                      {item.originalUrl}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Overlay - Only show on mobile when sidebar takes full width */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 transition-opacity duration-300 sm:hidden"
          onClick={onClose}
        />
      )}
    </>
  );
};
