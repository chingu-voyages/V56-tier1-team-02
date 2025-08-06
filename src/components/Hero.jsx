import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from '../components/UserContext';
import { useState, useEffect } from 'react';

function Hero() {
  
    const { setRole } = useContext(UserContext);
      const navigate = useNavigate();
    
      const handleGuest = () => {
        localStorage.setItem('role', 'guest');
        setRole('guest');
        navigate('/patient-status');
      };
    
      const handleLogin = () => {
        navigate("/login"); // Goes to login page to set role as admin/surgical
      };
    
  return (
     
      <section className="px-2 text-center flex flex-col items-center justify-center min-h-screen">
        <h2 className="md:text-4xl text-3xl font-bold text-[#0069AB] mb-4 ">
          Stay Informed. Stay Calm.
        </h2>
        <p className="md:text-lg text-md text-gray-600 mb-8 max-w-2xl mx-auto p-4">
          Real-time updates on patient surgery status. Know exactly where your loved one is in the process — from check-in to recovery.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link
            to="/login" onClick={handleLogin}
            className="bg-blue-700 text-white px-6 py-3 rounded-xl font-medium shadow hover:bg-blue-800 transition"
          >
            🔐 Login
          </Link>
          <Link
            to="/patient-status" onClick={handleGuest}
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-xl font-medium shadow hover:bg-gray-300 transition"
          >
            👤 Continue as Guest
          </Link>
        </div>
      </section>
      
  )
}

export default Hero