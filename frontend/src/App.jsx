import './App.css'
import { Navbar } from './components/navbar'
import { MainCompo } from './components/mainCompo'
import { Features } from './components/features'
import { Footer } from './components/Footer'

function App() {

  return (
    <div className="min-h-screen bg-white dark:bg-[#030303] transition-colors duration-300">
      <Navbar />
      <MainCompo />
      <Features />
      <Footer />
    </div>
  )
}

export default App
