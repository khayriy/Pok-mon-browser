import {  Routes, Route } from "react-router-dom";
import "./App.css";
import Pokemons from "./pages/pokemons";
import SinglePokemon from "./pages/single-pokemon";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Pokemons />} />
        <Route path="/pokemon/:id" element={<SinglePokemon />} />
      </Routes>
    
  );
}

export default App;
