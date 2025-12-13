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
  const [urlHistory, setUrlHistory] = useState([
    // Sample data - replace with actual data from your backend
    {
      shortUrl: 'https://short.ly/abc123',
      originalUrl: 'https://www.example.com/very/long/url/that/needs/shortening',
      timestamp: '2 hours ago',
      expiresIn: '24h'
    },
    {
      shortUrl: 'https://short.ly/xyz789',
      originalUrl: 'https://www.another-example.com/another/very/long/url',
      timestamp: '5 hours ago',
      expiresIn: '12h'
    }
  ]);

  return (
    <div className="min-h-screen bg-white dark:bg-[#030303] transition-colors duration-300">
      <Navbar onHistoryClick={() => setIsHistoryOpen(true)} />
      <MainCompo />
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
