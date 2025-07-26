import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PatientStatus from './pages/PatientStatus'
import PatientInfo from './pages/PatientInfo'
import StatusUpdate from './pages/StatusUpdate'

function App() {

  return (
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/status" element={<PatientStatus />} />
          <Route path="/info" element={<PatientInfo />} />
          <Route path="/update" element={<StatusUpdate />} />
    </Routes>
  )
}

export default App
