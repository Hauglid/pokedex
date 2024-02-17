import { PokemonResult } from "../definitions";

export async function fetchPokemonList(pageParam: string) {
  // https://pokeapi.co/api/v2/pokemon?offset=0&limit=151
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?${pageParam}`
  );

  return (await response.json()) as PokemonResult;
}
