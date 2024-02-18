import { useQuery } from "@tanstack/react-query";
import { fetchPokemon } from "../requests/fetchPokemon";

export const usePokemonQuery = (name: string) =>
  useQuery({
    queryKey: ["pokemon", name],
    queryFn: () => fetchPokemon(name),
    staleTime: 5000,
  });
