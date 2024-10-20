import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { useNavigate } from "react-router-dom";

export const App = () => {
  const navigate = useNavigate();

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleIsAuthenticated = (isAuth) => {
    setIsAuthenticated(isAuth);
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  }, [isAuthenticated]);

  return (
    <Box className="App">
      <Routes>
        <Route
          path="/dashboard"
          element={
            <Dashboard
              isAuth={isAuthenticated}
              onAuth={handleIsAuthenticated}
            />
          }
        />
        <Route
          path="/register"
          element={
            <SignUp isAuth={isAuthenticated} onAuth={handleIsAuthenticated} />
          }
        />
        <Route
          path="/"
          element={
            <Login isAuth={isAuthenticated} onAuth={handleIsAuthenticated} />
          }
        />
      </Routes>
    </Box>
  );
};
