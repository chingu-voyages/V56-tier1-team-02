// src/context/UserContext.jsx
import { createContext, useState, useEffect, useContext, useRef } from "react";

export const PatientsContext = createContext();

export const usePatients = () => useContext(PatientsContext);

export const PatientsProvider = ({ children }) => {
  const [patients, setPatients] = useState([]);
  const isFirstRun = useRef(true);


  useEffect(() => {
    const storedPatients = localStorage.getItem("patients");
    if (storedPatients) setPatients(JSON.parse(storedPatients));
  }, []);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);
  return (
    <PatientsContext.Provider value={{ patients, setPatients }}>
      {children}
    </PatientsContext.Provider>
  );
};
export default PatientsProvider;
