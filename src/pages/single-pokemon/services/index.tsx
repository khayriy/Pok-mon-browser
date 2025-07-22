import axios from "axios";
import api from "../../../lib/axios";

export const getSinglePokemon = async (idOrName: string) => {
  try {
    const response = await api.get(`/pokemon/${idOrName}`);
    return response.data;
  } catch (error) {
    throw new Error(
      axios.isAxiosError(error)
        ? error.message
        : 'Unexpected error while fetching a single Pokémon'
    );
  }
};