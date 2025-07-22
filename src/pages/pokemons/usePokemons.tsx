import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import { getAllPokemons, type PokemonListItem } from "./services/get-all-pokemons";
import { useMemo } from "react";

// Helper to extract just the last number from the URL
const extractIdFromUrl = (url: string): string => {
  const match = url.match(/\/(\d+)\/$/); // Matches the last number before the trailing slash
  return match ? match[1] : '';
};

const usePokemons = (
  page: number = 1,
  itemsPerPage: number = 20,
  mode: 'pagination' | 'infinite' = 'pagination'
) => {
  const offset = (page - 1) * itemsPerPage;

  const paginatedQuery = useQuery({
    queryKey: ["pokemons", page],
    queryFn: () => getAllPokemons(itemsPerPage, offset),
    enabled: mode === 'pagination',
  });

  const infiniteQuery = useInfiniteQuery({
    queryKey: ["pokemons-infinite"],
    queryFn: ({ pageParam = 1 }) => {
      const offset = (pageParam - 1) * itemsPerPage;
      return getAllPokemons(itemsPerPage, offset);
    },
    getNextPageParam: (lastPage, allPages) => {
      const totalLoaded = allPages.length * itemsPerPage;
      return totalLoaded < (lastPage.total ?? 0) ? allPages.length + 1 : undefined;
    },
    enabled: mode === 'infinite',
    initialPageParam: 1,
  });

  const transformedData = useMemo(() => {
    const rawResults =
      mode === 'pagination'
        ? paginatedQuery.data?.results ?? []
        : infiniteQuery.data?.pages.flatMap((page) => page.results) ?? [];

    return rawResults.map((pokemon) => ({
      ...pokemon,
      id: extractIdFromUrl(pokemon.url),
    })) as (PokemonListItem & { id: string })[] | undefined;
  }, [mode === 'pagination' ? paginatedQuery.data : infiniteQuery.data]);

  return {
    data: transformedData,
    totalCount:
      mode === 'pagination'
        ? paginatedQuery.data?.total ?? 0
        : infiniteQuery.data?.pages[0]?.total ?? 0,
    isLoading: mode === 'pagination' ? paginatedQuery.isPending : infiniteQuery.isPending,
    error: mode === 'pagination' ? paginatedQuery.error : infiniteQuery.error,
    fetchNextPage: infiniteQuery.fetchNextPage,
    hasNextPage: infiniteQuery.hasNextPage,
  };
};

export default usePokemons;
