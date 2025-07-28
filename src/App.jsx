import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PatientStatus from './pages/PatientStatus'
import PatientInfo from './pages/PatientInfo'
import StatusUpdate from './pages/StatusUpdate'
import Login from './pages/Login'

function App() {

  return (
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/patient-status" element={<PatientStatus />} />
          <Route path="/info" element={<PatientInfo />} />
          <Route path="/update" element={<StatusUpdate />} />
          <Route path="/login" element={<Login />} />
          {/* Add more routes as needed */}
    </Routes>
  )
}

export default App
