import { NavBar } from "./components/NavBar"
import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { CardioForm } from "./components/CardioForm"


export const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Hero/>
      <About />
      <CardioForm />
    </div>
  );
};