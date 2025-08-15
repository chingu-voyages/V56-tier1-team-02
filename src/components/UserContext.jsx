// src/context/UserContext.jsx
import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [role, setRole] = useState(null);
  const [name, setName] = useState(null);
  const [loading, setLoading] = useState(true); // ✅

  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    const storedName = localStorage.getItem('name');

    if (storedRole) {
      setRole(storedRole);
    }
    if (storedName) {
      setName(storedName);
    }
    setLoading(false);
  }, []);

  return (
    <UserContext.Provider value={{ role, setRole, name, setName, loading }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;