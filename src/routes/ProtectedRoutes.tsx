import { Navigate, Outlet } from "react-router-dom";

import { useAuthContext } from "../context/AuthContext";

const ProtectedRoutes = () => {
  const { authUser } = useAuthContext();

  if (!authUser) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};
export default ProtectedRoutes;
