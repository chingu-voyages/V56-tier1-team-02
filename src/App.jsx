import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import Home from './pages/Home'
import PatientStatus from './pages/PatientStatus'
import PatientInfo from './pages/PatientInfo'
import StatusUpdate from './pages/StatusUpdate'
import Login from './pages/Login'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  return (
    <Router>
      <div className="flex flex-col h-screen justify-between">
      <Header/>
          <main>
            <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/patient-status" element={<PatientStatus />} />
                  <Route path="/info" element={<PatientInfo />} />
                  <Route path="/update" element={<StatusUpdate />} />
                  <Route path="/login" element={<Login />} />
                  {/* Add more routes as needed */}
            </Routes>
          </main>
      <Footer/> 
      </div>     
    </Router>
  )
}

export default App
