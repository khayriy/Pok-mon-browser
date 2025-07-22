import api from '../../../../lib/axios';
import axios from 'axios';

export interface PokemonListItem {
  name: string;
  url: string;
}

export interface GetAllPokemonsResult {
  results: PokemonListItem[];
  total: number;
  next: string | null;
  previous: string | null;
}

interface PokeApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListItem[];
}

export const getAllPokemons = async (
  limit: number = 20,
  offset: number = 0
): Promise<GetAllPokemonsResult> => {
  try {
    // Since your interceptor returns response.data directly, we don't use AxiosResponse type
    const response = await api.get<PokeApiResponse>('/pokemon', {
      params: { limit, offset },
    });

    // Response is already the unwrapped data (PokeApiResponse)
    return {
      results: response.data.results,
      total: response.data.count,
      next: response.data.next,
      previous: response.data.previous,
    };
  } catch (error) {
    throw new Error(
      axios.isAxiosError(error) 
        ? error.message 
        : 'Unexpected error while fetching pokemons'
    );
  }
};