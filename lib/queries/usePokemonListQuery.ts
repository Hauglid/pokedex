import { useQuery } from "@tanstack/react-query";
import { fetchPokemonList } from "../requests/fetchPokemonList";

const PokemonListQueryData = {
  queryKey: ["pokemonlist"],
  queryFn: () => fetchPokemonList(),
  staleTime: 5000,
};

export const usePokemonListQuery = () =>
  useQuery({
    ...PokemonListQueryData,
  });
