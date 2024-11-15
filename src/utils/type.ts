export interface PokemonData {
  id: number;
  name: string;
  japaneseName: string;
  typesInJapanese: string[];
  abilitiesInJapanese: string[];
  species: {
    url: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
  abilities: {
    ability: {
      url: string;
    };
  }[];
  url: string;
}

export interface ApiResponse {
  results: {
    url: string;
  }[];
  next: string;
  previous: string | null;
}
