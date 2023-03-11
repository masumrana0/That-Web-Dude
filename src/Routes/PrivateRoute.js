import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { contexts } from "../Contexts/UserContext";

const PrivateRoute = ({children}) => {
  const { user, loading } = useContext(contexts);
  const location = useLocation();
  if (loading) {
    return <div className="loading"><h1>Loading.....</h1></div>
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default PrivateRoute;
