import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../components/UserContext';
import { use, useContext } from 'react'


function Hero() {

  const { role } = useContext(UserContext);
  const navigate = useNavigate()
  const handleGuest = () => {
    navigate("/patient-status")
  }  
  const handleLogin = () => {
    navigate("/login")
  }

  return (
       <section className="px-2 text-center flex flex-col items-center justify-center min-h-screen">
        <h1 className="md:text-5xl text-3xl font-bold text-[#0069AB] mb-4">
                Stay&nbsp;
                <span className="relative before:absolute before:content-[''] before:h-[0.2em] before:w-[85%] before:bottom-[0.1em]  before:-z-10 before:bg-[#FFE299]">Informed</span>.
                Stay&nbsp;
                <span className="relative before:absolute before:content-[''] before:h-[0.2em] before:w-[80%] before:bottom-[0.1em] before:-z-10 before:bg-[#FFE299]">Calm</span>
            </h1>
        
        <p className="md:text-lg text-md text-gray-600 mb-8 max-w-2xl mx-auto p-4">
          Real-time updates on patient surgery status. Know exactly where your loved one is in the process — from check-in to recovery.
        </p>
        {!role && (
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link
            to="/login" onClick={handleLogin}
            className="bg-blue-700 text-white px-6 py-3 rounded-xl font-medium shadow hover:bg-blue-800 transition "
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
        )}
      </section>
  )
}

export default Hero

