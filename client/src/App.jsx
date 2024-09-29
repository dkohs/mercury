import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";

export const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Box className="App">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Box>
    </Router>
  );
};
