import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./UseAuth";

// eslint-disable-next-line react/prop-types
function ProtectedRoute({ children }) {
  const [authStatus, setAuthStatus] = useState(null);
  const auth = useAuth();

  useEffect(() => {
    const checkAuthentication = async () => {
      const isAuthenticated = await auth;
      setAuthStatus(isAuthenticated);
    };

    checkAuthentication();
  }, [auth]);

  if (authStatus === false) {
    return <Navigate to="/login" />;
  } else if (authStatus) {
    return <>{children}</>;
  } else {
    return <>{children}</>; // Render null or a loading state until the authentication status is determined
  }
}

export default ProtectedRoute;
