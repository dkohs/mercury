import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { LogInForm } from "../components/LogInForm";
import { Box } from "@mui/material";

export const Login = () => {
  return (
    <Box className="Login">
      <NavBar />
      <LogInForm />
      <Footer />
    </Box>
  );
};
