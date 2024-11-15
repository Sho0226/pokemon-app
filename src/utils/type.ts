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
      url: string; // urlプロパティを追加
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

export interface TypeData {
  type: {
    name: string;
    url: string;
  };
}

export interface NameData {
  name: string;
  language: {
    name: string;
  };
}
