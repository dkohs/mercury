import { NavBar} from "./components/NavBar"
import { About } from "./components/About"
import { Page1 } from "./components/Page1"




export const App = () => {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Page1 />
    </div>
  );
}
