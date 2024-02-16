export type PokemonResult = {
  count: number;
  next: string;
  previous: string;
  results: PokemonSimple[];
};

export type PokemonSimple = {
  name: string;
  url: string;
};

export type Pokemon = {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
};
