// src/components/Header.jsx
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './UserContext';
import logo from '../assets/logo-ssb.png'; 
import { useState, useEffect } from 'react';
function Header() {
  
  const { role } = useContext(UserContext);


  const linkClasses = ({ isActive }, extra = '') =>
    `${extra} px-8 py-2 transition ${
      isActive
        ? 'text-white font-bold bg-[#0069AB]'
        : 'text-[#0069AB] hover:bg-[#0069AB] hover:text-white'
    }`;

  const date = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (

      <header className="bg-white/50 border-b border-gray-100 py-4 sticky top-0 z-40 backdrop-blur-sm text-[#0069AB]">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-3">
                    <img src={logo} alt="Logo" className="w-16 h-16 md:w-20 md:h-20" />
                    <h1 className="text-xl md:text-2xl font-bold">Surgery Status Board</h1>
                </div>
                <div className="text-sm font-medium">
                    <time className="md:text-lg text-md">{date}</time>
                </div>
            </div>
        

      
            {/* Show navbar links only after role is selected */}
            {role && (
              <nav className="flex items-center justify-center text-lg rounded-xl bg-white/50 mt-2">
                {role === 'admin' && (
                  <>
                    <NavLink to="/" className={(props) => linkClasses(props, 'rounded-l-xl')}>Home</NavLink>
                    <NavLink to="/info" className={linkClasses}>Patient Info</NavLink>
                    <NavLink to="/update" className={linkClasses}>Status Update</NavLink>
                    <NavLink to="/patient-status" className={(props) => linkClasses(props, 'rounded-r-xl')}>Patient Status</NavLink>
                  </>
                )}
                {role === 'surgical' && (
                  <>
                    <NavLink to="/" className={(props) => linkClasses(props, 'rounded-l-xl')}>Home</NavLink>
                    <NavLink to="/update" className={linkClasses}>Status Update</NavLink>
                    <NavLink to="/patient-status" className={(props) => linkClasses(props, 'rounded-r-xl')}>Patient Status</NavLink>
                  </>
                )}
                {role === 'guest' && (
                  <>
                    <NavLink to="/" className={(props) => linkClasses(props, 'rounded-l-xl')}>Home</NavLink>
                    <NavLink to="/patient-status" className={(props) => linkClasses(props, 'rounded-r-xl')}>Patient Status</NavLink>
                  </>
                )}
              </nav>
            )}
      </div>
    </header>
    
  );
}

export default Header;
