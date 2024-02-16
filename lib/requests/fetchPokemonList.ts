import { PokemonResult } from "../definitions";

export async function fetchPokemonList(offset?: number, limit?: number) {
  // https://pokeapi.co/api/v2/pokemon?offset=0&limit=151
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
  );

  return (await response.json()) as PokemonResult;
}
