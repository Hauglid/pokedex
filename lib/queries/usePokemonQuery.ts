import { useQuery } from "@tanstack/react-query";
import { fetchPokemon } from "../requests/fetchPokemon";

export const usePokemonQuery = (id: string) =>
  useQuery({
    queryKey: ["pokemon", id],
    queryFn: () => fetchPokemon(id),
    staleTime: 5000,
  });
