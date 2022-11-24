import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import Spinner from "../Pages/Home/components/Spinner/Spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }

  if (loading) {
    return <Spinner />;
  }

  return children;
};

export default PrivateRoute;
