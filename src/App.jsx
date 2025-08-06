import { useState, useEffect } from 'react'
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
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./pages/NotFound";



function App() {
   
  return (
    <Router>

     
      <Header/>
          <main>
            <Routes>
                  <Route path="/" element={<Home />} />
                  {/* Accessible to all roles */}
                  <Route path="/patient-status" element={<PatientStatus />} />
                  {/* Accessible to admin */}
                  <Route path="/info" element={
                    <ProtectedRoute allowedRoles={"admin"}>
                        <PatientInfo />
                    </ProtectedRoute>} />
                  {/* Accessible to admin and surgicalMembers */}
                  <Route path="/update" element={
                    <ProtectedRoute allowedRoles={["admin", "surgical"]}>
                        <StatusUpdate />
                    </ProtectedRoute>} />
                  <Route path="/login" element={<Login />} />
                  {/* Add more routes as needed */}
                   {/* Catch all */}
                  <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

      <Footer/> 

    </Router>
  )
}

export default App
