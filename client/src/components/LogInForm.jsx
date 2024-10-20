import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const LogInForm = ({ onAuth }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("/login", {
        email,
        password,
      });

      // If login is successful, you'll get the JWT token in the response
      const { token } = response.data;

      if (!token) {
        return;
      }

      // Store the token (e.g., in localStorage or state management)
      localStorage.setItem("token", token);

      onAuth(true);

      // Optionally, navigate the user to another page
      navigate("/dashboard");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        console.error("User not found");
      } else if (error.response && error.response.status === 401) {
        console.error("Invalid password");
      } else {
        console.error("Error logging in:", error);
      }
    }
  };

  const handleRegisterReroute = () => {
    navigate("/register");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      minHeight={"70vh"}
    >
      <Box       sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "300px",
        margin: "auto",
        padding: "20px",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
        margin: "100px auto"
      }}>
        <Typography variant="h5" sx={{ marginBottom: "20px" }}>
          Login
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="Log In"
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            marginTop: "20px",
          }}
        >
          Log In
        </Button>
        <Box
          sx={{
            height: "2px",
            width: "250px",
            backgroundColor: "#E5CCCC", // Line color
            marginX: "16", // Margin around the line
            marginTop: "20px",
          }}
        />
        <Typography
          variant="h6"
          sx={{
            marginTop: "15px",
            fontSize: "15px",
          }}
          onClick={handleRegisterReroute}
        >
          Register Now
        </Typography>
      </Box>
    </Box>
  );
};

export default LogInForm;
