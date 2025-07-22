import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Pokemons from "./pages/pokemons";

function App() {
  return (
    <BrowserRouter>
      <Pokemons />
    </BrowserRouter>
  );
}

export default App;
