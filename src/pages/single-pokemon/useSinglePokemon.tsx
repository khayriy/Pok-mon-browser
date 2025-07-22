// hooks/usePokemonDetails.ts
import { useQuery } from "@tanstack/react-query";
import { getSinglePokemon } from "./services";
import { useNavigate } from "react-router-dom";

const usePokemonDetails = (idOrName: string | undefined) => {
  const navigate = useNavigate()  
  const { isLoading , data , isError} = useQuery({
    queryKey: ["pokemon", idOrName],
    queryFn: () => getSinglePokemon(idOrName!),
    enabled: !!idOrName,
  });

  const navigateToList = ()=>{
    navigate('/')
  }
  return {
    data , 
    isLoading , 
    isError , 
    navigateToList
  }
};

export default usePokemonDetails