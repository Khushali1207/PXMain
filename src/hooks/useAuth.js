
import { useState, useEffect } from "react";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("px_token");
    setIsAuthenticated(!!token);
  }, []);

  return isAuthenticated;
};
