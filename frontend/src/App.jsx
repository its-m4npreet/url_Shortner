import './App.css'
import { useState } from 'react'
import { Navbar } from './components/navbar'
import { MainCompo } from './components/mainCompo'
import { Features } from './components/features'
import { Footer } from './components/Footer'
import { HistorySidebar } from './components/HistorySidebar'
// import { HowToUse } from './components/HowToUse'

function App() {
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [urlHistory, setUrlHistory] = useState([]);

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
    <div className="min-h-screen bg-white dark:bg-[#030303] transition-colors duration-300">
      <Navbar onHistoryClick={() => setIsHistoryOpen(true)} />
      <MainCompo onUrlShortened={addToHistory} />
      <Features />
      <Footer />
      <HistorySidebar 
        isOpen={isHistoryOpen} 
        onClose={() => setIsHistoryOpen(false)}
        historyData={urlHistory}
      />
    </div>
  )
}

export default App
