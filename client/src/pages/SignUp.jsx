import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { SignUpForm } from "../components/SignUpForm";
import { Box } from "@mui/material";

export const SignUp = () => {
  return (
    <Box className="SignUp">
      <NavBar />
      <SignUpForm />
      <Footer />
    </Box>
  );
};
