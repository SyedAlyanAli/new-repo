import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";



const ProtectedRoute = ({isAdmin, children, ...rest }) => {
  const auth = useSelector((state) => state.auth);
  const location = useLocation();
  const isAuthenticated = auth.isAuthenticated;
  return isAuthenticated ? (
    children
  ) : (
  
  // <Fragment>
    
    
    // if (isAuthenticated === false) {
    //    <Navigate to="/login" />
    // }

    // if (isAdmin === true && user.role !== "admin") {
    //   <Navigate to="/login" />
    // }</Fragment>
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default ProtectedRoute;
