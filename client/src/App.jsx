import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { CardioForm } from "./components/CardioForm";
import { Footer } from "./components/Footer";
import { LogInForm } from "./components/LogInForm";
import { SignUpForm } from "./components/SignUpForm";
import { Box } from "@mui/material";

export const App = () => {
  return (
    <Box className="App">
      <NavBar />
      <Hero />
      <About />
      <CardioForm />
      <LogInForm />
      <SignUpForm />
      <Footer />
    </Box>
  );
};
