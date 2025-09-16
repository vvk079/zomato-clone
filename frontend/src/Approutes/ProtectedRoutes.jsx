import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("token"); // ya session check
  if (!isAuthenticated) {
    return <Navigate to="/user/login" />;
  }
  return children;
};

export default ProtectedRoute;
