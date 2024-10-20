import { NavBar } from "../components/NavBar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { CardioForm } from "../components/CardioForm";
import { Footer } from "../components/Footer";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Graph } from "../components/Graph";

export const Dashboard = ({ isAuth, onAuth }) => {
  const navigate = useNavigate();

  if (!isAuth) {
    navigate("/");
  }

  return (
    <Box className="Dashboard">
      <NavBar isAuth={isAuth} onAuth={onAuth}/>
      <Hero />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto"
        }}
      >
        <About />
        <CardioForm />
        <Graph />
      </Box>
      <Footer />
    </Box>
  );
};
