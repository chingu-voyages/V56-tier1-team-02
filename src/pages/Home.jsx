import { Link, useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from '../components/UserContext';

const Home = () => {
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
     <div>

 {/* Hero Section */}
      <section className="py-20 my-20 px-2 text-center flex flex-col items-center justify-center">
        <h2 className="md:text-4xl text-3xl font-bold text-[#0069AB] mb-4 ">
          Stay Informed. Stay Calm.
        </h2>
        <p className="md:text-lg text-md text-gray-600 mb-8 max-w-2xl mx-auto p-4">
          Real-time updates on patient surgery status. Know exactly where your loved one is in the process — from check-in to recovery.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link
            to="/login"
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

     {/* Features Section */}
      <section className="bg-blue-50 min-h-screen flex flex-col justify-center items-center py-10 px-4">
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-3xl font-semibold text-[#0069AB] mb-5">Why This Matters</h3>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto text-center">
            Surgery is stressful. We make it clearer.
        </p>
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left max-w-4xl">
            <div>
              <h4 className="font-bold text-lg mb-2 text-blue-950">🧠 Reduces Anxiety</h4>
              <p className="text-gray-600">Loved ones in the waiting room often feel helpless. 
                This app provides peace of mind by keeping them informed without needing constant updates from staff.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-blue-950">⏱️ Saves Time for Medical Staff</h4>
              <p className="text-gray-600">Rather than answering repeated questions, staff can focus on patient care while families receive updates automatically.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-blue-950">🔐 Keeps Information Secure</h4>
              <p className="text-gray-600">Patient names are displayed using initials or anonymized tags to respect privacy while still keeping the process transparent.</p>
            </div>
             <div>
              <h4 className="font-bold text-lg mb-2 text-blue-950">📶 Centralized & Digital</h4>
              <p className="text-gray-600">Whether accessed from a waiting room screen or on a personal device, the information is live, synced, and easy to follow.</p>
            </div>
             <div>
              <h4 className="font-bold text-lg mb-2 text-blue-950">💬 Optional AI Chat Support</h4>
              <p className="text-gray-600">Need help understanding the process or have a question? Use the built-in chatbot to get instant answers—no need to track down busy personnel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
<section className="bg-blue-100 flex flex-col justify-center items-center min-h-screen py-10 px-4 md:px-0">
  <h3 className="text-3xl font-semibold text-[#0069AB] mb-4">How It Works</h3>
  <p className="text-lg text-gray-600 mb-8 max-w-2xl text-center">
    The system adapts to each role — from hospital staff managing patient flow to families staying informed.
  </p>
  <div className="grid md:grid-cols-3 gap-10 text-left md:max-w-4xl md:mx-auto">
    {/* Step 1 */}
    <div className=" text-justify border-1 border-gray-100 p-6 rounded-lg shadow-md bg-blue-50 transition duration-400 hover:scale-110">
      <h4 className="font-bold text-xl text-center text-blue-950 mb-4">1- Choose Your Access</h4>
      <p className="text-gray-600">
        Start by selecting how you want to access the app. Hospital staff can log in with their credentials, while family members can continue as guests using a secure patient code.
      </p>
    </div>

    {/* Step 2 */}
    <div className="text-justify border-1 border-gray-100 p-6 rounded-lg shadow-md bg-blue-50 transition duration-400 hover:scale-110">
      <h4 className="font-bold text-xl text-center text-blue-950 mb-4">2- Follow the Progress</h4>
      <p className="text-gray-600">
        Once inside, staff can manage patient timelines and update surgical status. Guests can track real-time updates on their loved one’s procedure using the code provided by the hospital.
      </p>
    </div>

    {/* Step 3 */}
    <div className="text-justify border-1 border-gray-100 p-6 rounded-lg shadow-md bg-blue-50 transition duration-400 hover:scale-110">
      <h4 className="font-bold text-xl text-center text-blue-950 mb-4">3- Stay Updated</h4>
      <p className="text-gray-600">
        Get instant updates when the surgery is complete or when the patient is moved to recovery. No need to wait for phone calls — the board keeps everyone informed.
      </p>
    </div>
  </div>
</section>




      {/* FAQ */}
      <section className="bg-blue-50  flex flex-col justify-center items-center min-h-screen">
        <div className=" md:bg-white/50 md:max-w-4xl md:mx-auto w-fit text-center md:border-1 md:rounded-lg md:px-8 px-6 md:py-10 h-fit md:border-gray-100 md:shadow-lg md:m-4">
        <h3 className="text-3xl font-semibold text-[#0069AB] mb-10 text-center">Frequently Asked Questions</h3>
        <div className="space-y-6 md:px-6 text-left">
          <div>
            <h4 className="font-bold text-blue-400">🔐 Is login required ?</h4>
            <p className="text-gray-600">Only if you're staff. Guests can access public patient status with a single click.</p>
          </div>
          <div>
            <h4 className="font-bold text-blue-400">📱 Can I use this on mobile ?</h4>
            <p className="text-gray-600">Yes! The interface is fully responsive and works on smartphones and tablets.</p>
          </div>
          <div>
            <h4 className="font-bold text-blue-400">🕵️ Is personal data displayed ?</h4>
            <p className="text-gray-600">No. Only anonymized patient codes and statuses are shown — no names or sensitive data.</p>
          </div>
           <div>
            <h4 className="font-bold text-blue-400">What if I don’t log in?</h4>
            <p className="text-gray-600">You can still view status as guest.</p>
          </div>
        </div>
        </div>
      </section>
    </div>
    
  );
};
export default Home;