import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

export const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
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
            marginRight: "5px"
          }}
        >
        <TextField
          label="First Name"
          variant="outlined"
          fullWidth
          margin="normal"
          />
          </Box>
        <Box
          sx={{
            marginLeft: "5px"
          }}
        >
        <TextField
          label="Last Name"
          variant="outlined"
          fullWidth
          margin="normal"
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
      >
        Create an Account
      </Typography>
    </Box>
  );
};

export default SignUpForm;
