import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const role = localStorage.getItem("role");

  if (!role) return <Navigate to="/login" />;
  if (!allowedRoles.includes(role)) return <Navigate to="/" />;

  return children;
};

export default ProtectedRoute;
