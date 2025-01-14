import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import HomePage from './pages/HomePage'
import ModulePage from './pages/ModulePage'
import { useTheme } from './hooks/useTheme'

function App() {
  const { theme } = useTheme()
  
  return (
    <Router>
      <div className={`min-h-screen ${theme.background}`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/module/:moduleId" element={<ModulePage />} />
          <Route path="/resources" element={<div className="pt-20 text-white text-center">Recursos (En desarrollo)</div>} />
          <Route path="/achievements" element={<div className="pt-20 text-white text-center">Logros (En desarrollo)</div>} />
          <Route path="/profile" element={<div className="pt-20 text-white text-center">Perfil (En desarrollo)</div>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App