import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { LogInForm } from "../components/LogInForm";
import { Box } from "@mui/material";

export const Login = ({isAuth, onAuth}) => {
  return (
    <Box className="Login">
      <NavBar isAuth={isAuth} onAuth={onAuth}/>
      <LogInForm  onAuth={onAuth}/>
      <Footer />
    </Box>
  );
};
