import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { SignUpForm } from "../components/SignUpForm";
import { Box } from "@mui/material";

export const SignUp = ({isAuth, onAuth}) => {
  return (
    <Box className="SignUp">
      <NavBar isAuth={isAuth} onAuth={onAuth}/>
      <SignUpForm />
      <Footer />
    </Box>
  );
};
