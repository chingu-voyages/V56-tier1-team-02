import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { credentials } from '../data';
import {
  LuEye,
  LuEyeOff,
  LuCircleAlert,
  LuCircleCheck,
  LuLock,
  LuMail,
} from 'react-icons/lu';
import { UserContext } from '../components/UserContext';

function Login() {
  const { setRole } = useContext(UserContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();

  const handleGuestAccess = () => {
    setRole('');
    navigate('/patient-status');
  };

  const validateForm = () => {
    let isValid = true;
    setEmailError('');
    setPasswordError('');
    setMessage('');

    if (!email) {
      setEmailError('Please enter your email address.');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Please enter a valid email address.');
      isValid = false;
    }

    if (!password) {
      setPasswordError('Please enter your password.');
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    const user = credentials.find(cred =>
      cred.email === email && cred.password === password
    );

    if (user) {
      setRole(user.role);
      setMessage(`Welcome back, ${user.name}! Redirecting...`);
      setMessageType('success');
      
      sessionStorage.setItem('surgeryBoardUser', JSON.stringify({
        email: user.email,
        role: user.role,
        name: user.name,
        loginTime: new Date().toISOString()
      }));

      if (user.role === 'admin') {
        navigate('/info');
      } else if (user.role === 'surgical') {
        navigate('/update');
      }
      
    } else {
      setMessage('Invalid email or password');
      setMessageType('error');
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md border border-gray-100">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-[#0069AB] mb-3">Sign In</h1>
          <p className="text-gray-600 leading-relaxed">
            Sign in to update patient status, add new patients, 
            or manage surgical information
          </p>
        </div>

        {/* Message */}
        {message && (
          <div className={`mb-6 p-4 rounded-lg flex items-center gap-2 ${
            messageType === 'success' 
              ? 'bg-green-50 border border-green-200 text-green-800' 
              : 'bg-red-50 border border-red-200 text-red-800'
          }`}>
            {messageType === 'success' ? (
              <LuCircleCheck className="w-5 h-5 flex-shrink-0" />
            ) : (
              <LuCircleAlert className="w-5 h-5 flex-shrink-0" />
            )}
            <span className="text-sm font-medium">{message}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <LuMail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                id="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent outline-none transition-all ${
                  emailError ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-[#0069AB]'
                }`}
                placeholder="Enter your email"
              />
            </div>
            {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <LuLock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:border-transparent outline-none transition-all ${
                  passwordError ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-[#0069AB]'
                }`}
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="Toggle password visibility"
              >
                {showPassword ? <LuEyeOff className="w-5 h-5" /> : <LuEye className="w-5 h-5" />}
              </button>
            </div>
            {passwordError && <p className="text-red-500 text-xs mt-1">{passwordError}</p>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 bg-[#0069AB] text-white font-semibold rounded-lg transition-all ${
              isLoading ? 'opacity-60 cursor-not-allowed' : 'hover:bg-blue-700 focus:ring-4 focus:ring-blue-200'
            }`}
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        {/* Guest Access */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex md:flex-row flex-col items-center justify-center mb-4 gap-2">
            <p className="text-sm text-gray-600 ">Just want to view patient status ?</p>

            <button
              onClick={handleGuestAccess}
              className=" text-sm text-[#0069AB] hover:border-b-[#0069AB] hover:border-b-1 transition-all"
            >
              Continue as Guest
            </button>
            
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
              No login required for viewing patient information
            </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
