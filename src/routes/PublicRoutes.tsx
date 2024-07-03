import { Navigate, Outlet } from "react-router-dom";

import { useAuthContext } from "../context/AuthContext";

const PublicRoutes = () => {
  const { authUser } = useAuthContext();

  if (authUser) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};
export default PublicRoutes;
