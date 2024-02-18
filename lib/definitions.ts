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
  abilities: Ability[];
  base_experience: number;
  cries: Cries;
  forms: Species[];
  game_indices: GameIndex[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_abilities: any[];
  past_types: any[];
  species: Species;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
};

export type Ability = {
  ability: Species;
  is_hidden: boolean;
  slot: number;
};

export type Species = {
  name: string;
  url: string;
};

export type Cries = {
  latest: string;
  legacy: string;
};

export type GameIndex = {
  game_index: number;
  version: Species;
};

export type Move = {
  move: Species;
  version_group_details: VersionGroupDetail[];
};

export type VersionGroupDetail = {
  level_learned_at: number;
  move_learn_method: Species;
  version_group: Species;
};

export type GenerationV = {
  "black-white": Sprites;
};

export type GenerationIv = {
  "diamond-pearl": Sprites;
  "heartgold-soulsilver": Sprites;
  platinum: Sprites;
};

export type Sprites = {
  back_default: string | undefined;
  back_female: string | undefined;
  back_shiny: string | undefined;
  back_shiny_female: string | undefined;
  front_default: string | undefined;
  front_female: string | undefined;
  front_shiny: string | undefined;
  front_shiny_female: string | undefined;
  other: Other;
};

export type Other = {
  "official-artwork": OfficialArtwork;
};

export type OfficialArtwork = {
  front_default: string;
  front_shiny: string;
};

export type Stat = {
  base_stat: number;
  effort: number;
  stat: Species;
};

export type Type = {
  slot: number;
  type: Species;
};
