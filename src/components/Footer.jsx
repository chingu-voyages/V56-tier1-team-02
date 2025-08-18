import { FaGithub } from 'react-icons/fa6';
import { FaHeartbeat, FaShieldAlt } from 'react-icons/fa';
import logo from '../assets/logo-ssb.png'
import { useNavigate } from 'react-router-dom';

import React from 'react'

function Footer() {

  const navigate = useNavigate()

  return (
    <footer className="bg-gradient-to-b from-white/80 to-gray-50/90 border-t border-gray-200 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center justify-center text-center space-y-6">
          {/* header with logo */}
          <div className="flex items-center md:gap-2 gap-0 cursor-pointer" onClick={()=>navigate("/")}>
            <img src={logo} alt="Logo" className="w-15 h-14 text-center" />
            <h3 className="font-semibold text-[#0069AB] text-lg m-0 p-0">Surgery Status Board</h3>
          </div>
          {/* development team */}
          <div className="max-w-md">
            <p className="text-gray-500 text-sm mb-4">Developed by IT Team</p>
            <div className="space-y-3">
              <a
                href="https://github.com/Isaacjosh23"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#0069AB] hover:text-blue-700 transition-colors duration-200 hover:underline text-sm font-medium"
              >
                Josh - Frontend Developer
              </a>
              <a
                href="https://github.com/ouassimaelyakoubi"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#0069AB] hover:text-blue-700 transition-colors duration-200 hover:underline text-sm font-medium"
              >
                Ouassima - Frontend Developer
              </a>
              <a
                href="https://www.linkedin.com/in/agilem"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#0069AB] hover:text-blue-700 transition-colors duration-200 hover:underline text-sm font-medium"
              >
                Emily - Scrum Master
              </a>
            </div>
          </div>
          {/* github repository link */}
          <a
            href="https://github.com/chingu-voyages/V56-tier1-team-02"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white/70 hover:bg-white transition-colors duration-300 text-[#0069AB] hover:text-blue-700 px-4 py-3 rounded-lg border border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-md group"
          >
            <FaGithub className="text-lg group-hover:scale-110 transition-transform duration-200" />
            <span className="text-sm font-medium">View Source Code</span>
          </a>
          <div className="flex flex-col sm:flex-row items-center gap-6 text-xs text-gray-600 mt-8">
            <div className="flex items-center gap-2">
              <FaShieldAlt className="text-green-500" />
              <span>HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span>System Operational</span>
            </div>
            <div className="flex items-center gap-2">
              <FaHeartbeat className="text-red-400" />
              <span>Real-time Updates</span>
            </div>
          </div>
        </div>
      {/* bottom section */}
        <div className="border-t border-gray-200 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-xs text-gray-500">
              <p>© 2025 Surgery Status Board. All rights reserved.</p>
            </div>
            <div className="text-xs text-gray-500">
              <p className="font-medium">Voyage 56 - Tier 1 - Team 02</p>
              <p className="mt-1 text-gray-400">Healthcare Technology Initiative</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

