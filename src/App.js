import { NavBar } from "./components/NavBar";
import { About } from "./components/About";
import { Page2 } from "./components/Page2";

export const App = () => {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Page2 />
    </div>
  );
};
