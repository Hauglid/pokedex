import { Pokemon } from "../definitions";

export async function fetchPokemon(name?: string) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

  return (await response.json()) as Pokemon;
}
