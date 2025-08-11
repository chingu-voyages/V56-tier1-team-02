// src/context/UserContext.jsx
import { createContext, useState, useEffect, useContext } from "react";

export const PatientsContext = createContext();

export const usePatients = () => useContext(PatientsContext);

export const PatientsProvider = ({ children }) => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const storedPatients = localStorage.getItem("patients");
    if (storedPatients) setPatients(JSON.parse(storedPatients));
  }, []);

  return (
    <PatientsContext.Provider value={{ patients, setPatients }}>
      {children}
    </PatientsContext.Provider>
  );
};
export default PatientsProvider;
