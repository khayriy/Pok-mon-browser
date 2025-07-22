// pages/PaginationView.tsx
import { useState } from "react";
import Header from "./header";
import PagePreviewControllers from "./page-preview-controllers";
import { usePreviewMode } from "../../hooks/usePreviewMode";
import Pagination from "../../components/pagination";
import List from "./pokemeon-list";

const Pokemons = () => {
  
  const { previewMode } = usePreviewMode();
  const [isLoading, setIsLoading] = useState(false);

  const dummyPokemonList = [
    {
      name: "bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon/1/",
    },
    {
      name: "ivysaur",
      url: "https://pokeapi.co/api/v2/pokemon/2/",
    },
    {
      name: "venusaur",
      url: "https://pokeapi.co/api/v2/pokemon/3/",
    },
    {
      name: "charmander",
      url: "https://pokeapi.co/api/v2/pokemon/4/",
    },
    {
      name: "charmeleon",
      url: "https://pokeapi.co/api/v2/pokemon/5/",
    },
    {
      name: "charizard",
      url: "https://pokeapi.co/api/v2/pokemon/6/",
    },
    {
      name: "squirtle",
      url: "https://pokeapi.co/api/v2/pokemon/7/",
    },
    {
      name: "wartortle",
      url: "https://pokeapi.co/api/v2/pokemon/8/",
    },
    {
      name: "blastoise",
      url: "https://pokeapi.co/api/v2/pokemon/9/",
    },
    {
      name: "caterpie",
      url: "https://pokeapi.co/api/v2/pokemon/10/",
    },
  ].map((pokemon, index) => ({
    ...pokemon,
    id: (index + 1).toString(),
  }));

  return (
    <div className="container mx-auto p-2">
      <Header />
      <PagePreviewControllers />
      <List isLoading={isLoading} pokemons={dummyPokemonList} />
      {previewMode === "pagination" && <Pagination />}
    </div>
  );
};

         

     

export default Pokemons;
