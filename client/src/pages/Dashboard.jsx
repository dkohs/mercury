import { NavBar } from "../components/NavBar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { CardioForm } from "../components/CardioForm";
import { Footer } from "../components/Footer";
import { Box } from "@mui/material";

export const Dashboard = () => {
  return (
    <Box className="Dashboard">
      <NavBar />
      <Hero />
      <About />
      <CardioForm />
      <Footer />
    </Box>
  );
};
