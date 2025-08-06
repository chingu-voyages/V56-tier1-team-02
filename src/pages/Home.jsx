import { Link, useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from '../components/UserContext';
import Hero from '../components/Hero';
import WhyItMatters from '../components/WhyItMatters';
import HowItWorks from '../components/HowItWorks';
import FAQ from '../components/FAQ';

const Home = () => {
   
  return (
    <div>
      <Hero />
      <WhyItMatters />
      <HowItWorks />
      <FAQ />
    </div>
    
  );
};
export default Home;