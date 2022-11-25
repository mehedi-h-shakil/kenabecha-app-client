import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useRole from "../hooks/useRole";
import Spinner from "../Pages/Home/components/Spinner/Spinner";

const BuyerRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isRole, isRoleLoading] = useRole(user?.email);

  const location = useLocation();

  if (loading || isRoleLoading) {
    return <Spinner />;
  }

  if (user && isRole === "Buyer") {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default BuyerRoute;
