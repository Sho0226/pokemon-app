import { ApiResponse, NameData, PokemonData, TypeData } from "./type";

export const getAllPokemon = (url: string): Promise<ApiResponse> => {
  return new Promise((resolve) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => resolve(data));
  });
};

export const getPokemon = (url: string): Promise<PokemonData> => {
  return new Promise((resolve) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
        console.log(data);
      });
  });
};

export const getPokemonJapaneseName = async (url: string): Promise<string> => {
  const response = await fetch(url);
  const data = await response.json();
  const japaneseName = data.names.find(
    (name: { language: { name: string } }) => name.language.name === "ja"
  )?.name;
  return japaneseName || "名前なし";
};

export const getPokemonTypes = async (types: TypeData[]): Promise<string[]> => {
  const typeUrls = types.map((type) => type.type.url);
  const typeNames = await Promise.all(
    typeUrls.map(async (url) => {
      const response = await fetch(url);
      const data: { names: NameData[] } = await response.json();
      const japaneseName = data.names.find(
        (name) => name.language.name === "ja"
      )?.name;
      return japaneseName || "タイプなし";
    })
  );
  return typeNames;
};

export const getPokemonAbilityJapaneseName = async (url: string) => {
  const response = await fetch(url);
  const data: { names: NameData[] } = await response.json();
  const japaneseName = data.names.find(
    (name) => name.language.name === "ja"
  )?.name;
  return japaneseName || "とくせいなし";
};
