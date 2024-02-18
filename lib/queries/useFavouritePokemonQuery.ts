import { useQuery } from "@tanstack/react-query";
import { fetchPokemon } from "../requests/fetchPokemon";
import { getSavedPokemonFavourites } from "../storage";

export const useFavouritePokemonQuery = () =>
  useQuery({
    queryKey: ["favourites"],
    queryFn: () => getSavedPokemonFavourites(),
    staleTime: 5000,
  });
