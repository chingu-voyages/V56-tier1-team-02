import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleGuest = () => {
    localStorage.setItem("role", "guest"); // Set role
    navigate("/patient-status"); // Redirect to Patient Status page
  };

  const handleLogin = () => {
    navigate("/login"); // Goes to login page to set role as admin/surgical
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen m-2 lg:m-0" >
      <h1 className="text-2xl md:text-4xl text-center font-bold mb-8 text-[#0069AB] leading-relaxed lg:w-[60%]">Track the process of your loved one’s surgery in real-time</h1>
        <div className="flex items-center justify-center self-center flex-col gap-4  md:w-95 xl:w-105 xl:py-12 px-6 rounded-lg bg-white shadow-xl py-10 w-[90%]">
          <button onClick={handleLogin} className="border-2 bg-[#0069AB] border-[#045679] font-bold text-white px-10 py-2 rounded-lg text-md md:text-lg xl:text-xl">Log In</button>
          <div className="flex items-center justify-center gap-4 w-full px-8 py-3 text-[#367B99]">
            <hr className="w-1/2 border-1"/>
            <p className="font-bold md:text-xl text-lg xl:text-2xl">Or</p>
            <hr className="w-1/2 border-1"/>
          </div>
          <button onClick={handleGuest} className="border-2 text-[#367B99] border-[#367B99] font-bold bg-white rounded-lg px-8 py-2 text-md md:text-lg xl:text-xl">Continue as Guest</button>
        </div>
    </div>
    
  );
};
export default Home;