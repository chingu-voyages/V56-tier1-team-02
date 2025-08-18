import { Navigate, useNavigate} from 'react-router-dom'
import { useContext } from "react";
import { UserContext } from "./UserContext";

import React from 'react'

const ProtectedRoute = ({ children, allowedRoles}) => {
  const navigate = useNavigate()
  const { role, setRole, setName, loading} = useContext(UserContext)

  const handleLogout = () => {
    localStorage.removeItem('role')
    localStorage.removeItem('name')
    setRole(null)
    setName(null)
    navigate('/login')
  }

  //wait until checks finishes
  if(loading) {
    return <div>...Loading</div>
  }

  // if not logged in at all
  if(!role) {
    return <Navigate to="/login" replace />;
  }

  //logged in but wrong role
  if(allowedRoles && !allowedRoles.includes(role)) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-6">
            <svg
              className="h-8 w-8 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Access Denied
          </h1>
          <div className="space-y-3 mb-6">
            <p className="text-gray-600">
              You don't have permission to access this page.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => window.history.back()}
              className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-200"
            >
              Go Back
            </button>
            <button
              onClick={() => {
                if (window.confirm('Would you like to logout and login with a different account?')) {
                  handleLogout();
                }
              }}
              className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
            >
              Switch Account
            </button>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              Need access? Contact your system administrator or IT support.
            </p>
          </div>
        </div>
      </div>
    </div>
    )
  }
  
  //allowed
  return children
}

export default ProtectedRoute



