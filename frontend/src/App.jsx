import './App.css'
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/navbar'
import { HomePage } from './pages/HomePage'
import { Login } from './components/Login'
import { Signup } from './components/Signup'
import { HistorySidebar } from './components/HistorySidebar'

function App() {
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [urlHistory, setUrlHistory] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // Check authentication status on mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    if (token && userData) {
      setIsLoggedIn(true);
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleAuthSuccess = (token, userData) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(userData));
    setIsLoggedIn(true);
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUser(null);
  };

  const addToHistory = (shortUrl, originalUrl, expiresHours) => {
    const newEntry = {
      shortUrl,
      originalUrl,
      timestamp: new Date().toLocaleString(),
      expiresIn: expiresHours === '1' ? '1h' : expiresHours === '6' ? '6h' : expiresHours === '12' ? '12h' : '24h'
    };
    setUrlHistory(prev => [newEntry, ...prev]);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white dark:bg-[#030303] transition-colors duration-300">
        <Navbar 
          onHistoryClick={() => setIsHistoryOpen(true)} 
          isLoggedIn={isLoggedIn}
          user={user}
          onLogout={handleLogout}
        />
        <Routes>
          <Route path="/" element={<HomePage onUrlShortened={addToHistory} />} />
          <Route path="/login" element={<Login onAuthSuccess={handleAuthSuccess} />} />
          <Route path="/signup" element={<Signup onAuthSuccess={handleAuthSuccess} />} />
        </Routes>
        <HistorySidebar 
          isOpen={isHistoryOpen} 
          onClose={() => setIsHistoryOpen(false)}
          historyData={urlHistory}
        />
      </div>
    </BrowserRouter>
  )
}

export default App
