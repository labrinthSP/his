import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const AuthWrapper = ({ allowedRoles, children }) => {
  const { user, token } = useSelector((state) => state.auth);

  if (!token || !allowedRoles.includes(user)) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default AuthWrapper;