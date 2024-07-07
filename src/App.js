import { NavBar} from "./components/NavBar"
import { About } from "./components/About"
import { Page1 } from "./components/Page1"
import { Page2 } from "./components/Page2"

export const App = () => {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Page1 />
      <Page2 />
    </div>
  );
};
