// src/components/Header.jsx
import { NavLink, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { UserContext } from './UserContext';
import logo from '../assets/logo-ssb.png';

function Header() {
  const { role } = useContext(UserContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const linkClasses = ({ isActive }) =>
    `block transition-all text-sm leading-6 tracking-wide w-fit ${
      isActive
        ? 'border-b-2 border-[#0069AB] font-bold'
        : 'text-[#0069AB]  hover:font-bold'
    }`;

  const date = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <header className="bg-white/50 border-b border-gray-100 sticky top-0 z-40 backdrop-blur-sm text-[#0069AB]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3">
        <div className="flex justify-between items-center gap-4">
         <div className="flex flex-col md:flex-row items-center w-full justify-between gap-4 ">
          {/* Logo + Title */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate('/')}
          >
            <img src={logo} alt="Logo" className="w-14 h-14" />
            <h1 className="text-lg md:text-xl font-bold ">
              Surgery Status Board
            </h1>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-10">
            <NavLink to="/" className={linkClasses}>Home</NavLink>
            <NavLink to="/info" className={linkClasses}>Patient Information</NavLink>
            <NavLink to="/update" className={linkClasses}>Patient Status Update</NavLink>
            <NavLink to="/patient-status" className={linkClasses}>Patient Status</NavLink>
          </nav>

          {/* Date */}
          <div className="text-sm text-gray-500 pl-10 md:pl-0">{date}</div>
          </div>
 {/* Mobile Menu Button */}
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

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="lg:hidden mt-4 flex flex-col gap-6 items-center pt-4">
            <NavLink to="/" className={linkClasses} onClick={() => setMenuOpen(false)}>Home</NavLink>
            <NavLink to="/info" className={linkClasses} onClick={() => setMenuOpen(false)}>Patient Information</NavLink>
            <NavLink to="/update" className={linkClasses} onClick={() => setMenuOpen(false)}>Patient Status Update</NavLink>
            <NavLink to="/patient-status" className={linkClasses} onClick={() => setMenuOpen(false)}>Patient Status</NavLink>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
