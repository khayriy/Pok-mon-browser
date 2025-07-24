// hooks/usePokemonDetails.ts
import { useQuery } from "@tanstack/react-query";
import { getSinglePokemon } from "./services";
import { useLocation, useNavigate } from "react-router-dom";

const usePokemonDetails = (idOrName: string | undefined) => {
  const location = useLocation();
  const navigate = useNavigate()  
  const { isLoading , data , isError} = useQuery({
    queryKey: ["pokemon", idOrName],
    queryFn: () => getSinglePokemon(idOrName!),
    enabled: !!idOrName,
  });

  

  const navigateToList = ()=>{
     navigate({
      pathname: '/',
      search: location.search, 
    });
  }
  return {
    data , 
    isLoading , 
    isError , 
    navigateToList
  }
};

export default usePokemonDetails