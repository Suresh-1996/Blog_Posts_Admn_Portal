import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("admin_token"); // Check if token exists
  return token ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
