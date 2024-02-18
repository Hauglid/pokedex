import { useQuery } from "@tanstack/react-query";
import { fetchPokemon } from "../requests/fetchPokemon";
import { getSavedPokemonFavourites, isPokemonFavourite } from "../storage";

export const useIsPokemonFavouriteQuery = (name: string) =>
  useQuery({
    queryKey: ["isFavourite", name],
    queryFn: () => isPokemonFavourite(name),
  });
