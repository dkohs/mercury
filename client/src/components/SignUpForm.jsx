import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const SignUpForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const registerPayload = {
      email,
      password,
      firstName,
      lastName,
    };

    try {
      const response = await axios.post("/register", registerPayload);
      console.log("Response:", response);
    } catch (error) {
      console.error("Error submitting data:", error);
    }

    navigate("/");
  };

  const handleLoginReroute = () => {
    navigate("/");
  };

  return (
    <Box component="form" onSubmit={handleSubmit} minHeight={"70vh"}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "300px",
          margin: "auto",
          padding: "20px",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9",
          margin: "100px auto",
        }}
      >
        <Typography variant="h5" sx={{ marginBottom: "20px" }}>
          Sign up
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              marginRight: "5px",
            }}
          >
            <TextField
              label="First Name"
              variant="outlined"
              fullWidth
              margin="normal"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Box>
          <Box
            sx={{
              marginLeft: "5px",
            }}
          >
            <TextField
              label="Last Name"
              variant="outlined"
              fullWidth
              margin="normal"
              onChange={(e) => setLastName(e.target.value)}
            />
          </Box>
        </Box>
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
          type="Sign Up"
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            marginTop: "20px",
          }}
        >
          Sign Up
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
          onClick={handleLoginReroute}
        >
          Login
        </Typography>
      </Box>
    </Box>
  );
};

export default SignUpForm;
