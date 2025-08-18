import { NavLink, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { UserContext } from './UserContext';
import logo from '../assets/logo-ssb.png'


import React from 'react'

function Header() {

  const { role, setRole, name, setName } = useContext(UserContext)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('role');
    localStorage.removeItem('name');
    setRole(null);
    setName(null);
    navigate('/');
  };


  const date = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const linkClasses = ({ isActive }) =>
    `block transition-all text-sm leading-6 tracking-wide w-fit ${
      isActive
        ? 'border-b-2 border-[#0069AB] font-bold'
        : 'text-[#0069AB]  hover:font-bold'
    }`;

  return (
     <header className="bg-white/50 border-b border-gray-100 sticky top-0 z-40 backdrop-blur-sm text-[#0069AB]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 lg:px-2">
        <div className="flex justify-between items-center gap-4 lg:gap-2">
         <div className="flex flex-col md:flex-row items-center w-full justify-between gap-4 ">
          {/* logo + title */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate('/')}
          >
            <img src={logo} alt="Logo" className="w-14 h-14" />
            <h1 className="text-lg md:text-xl font-bold ">
              Surgery Status Board
            </h1>
          </div>

          {/* desktop nav */}
          <nav className="hidden lg:flex gap-10">
            <NavLink to="/" className={linkClasses}>Home</NavLink>
            <NavLink to="/info" className={linkClasses}>Patient Information</NavLink>
            <NavLink to="/update" className={linkClasses}>Patient Status Update</NavLink>
            <NavLink to="/patient-status" className={linkClasses}>Patient Status</NavLink>
          
          </nav>

          {/* date */}
          <div className="text-sm text-gray-500 pl-10 md:pl-0">{date}</div>
          </div>
          <div className="hidden lg:flex justify-between items-center w-fit text-gray-500">
            {/* user info + logout btn */}
            {role && (
              <div className="flex items-center gap-0 pl-8">
                <div className="text-sm text-gray-500">
                  {name &&<span className="font-bold">{name}</span>}{' '}
                  <span className="italic">({role})</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="px-3 py-1 rounded bg-red-600 text-white text-sm hover:bg-red-700 cursor-pointer"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden focus:outline-none self-center pb-6 md:pb-0"
          >
            <svg
              className="w-6 h-6 text-[#0069AB]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          
        </div>

        {/* mobile menu */}
        {menuOpen && (
          <nav className="lg:hidden mt-4 flex flex-col gap-6 items-center pt-4">
            <NavLink to="/" className={linkClasses} onClick={() => setMenuOpen(false)}>Home</NavLink>
            <NavLink to="/info" className={linkClasses} onClick={() => setMenuOpen(false)}>Patient Information</NavLink>
            <NavLink to="/update" className={linkClasses} onClick={() => setMenuOpen(false)}>Patient Status Update</NavLink>
            <NavLink to="/patient-status" className={linkClasses} onClick={() => setMenuOpen(false)}>Patient Status</NavLink>
            {role && (
            <div className='border-t border-gray-200 pt-4 mt-4 w-full flex flex-col items-center'>
            <div className='flex justify-between gap-1 items-center mb-4 w-fit text-gray-500'>
              {name && <span className="font-bold ">{name}</span>}
              <span className="italic">({role})</span>
            </div>
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="px-3 py-1 mb-5 rounded bg-red-600 text-white text-sm hover:bg-red-700"
              >
                Logout
              </button>
            </div>
            )}
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header


