import {Routes, Route, BrowserRouter as Router} from "react-router-dom"
import Home from "./pages/Home.jsx"
import PatientStatus from "./pages/PatientStatus.jsx"
import PatientInfo from "./pages/PatientInfo.jsx"
import StatusUpdate from "./pages/StatusUpdate.jsx"
import Login from "./pages/Login.jsx"
import Footer from "./components/Footer.jsx"
import Header from "./components/Header.jsx"
import ProtectedRoute from "./components/ProtectedRoute.jsx"
import NotFound from './pages/NotFound'

import React from 'react'

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



