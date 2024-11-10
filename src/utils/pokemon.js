export const getAllPokemon = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => resolve(data));
  });
};

export const getPokemon = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
      });
  });
};

export const getPokemonJapaneseName = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  const japaneseName = data.names.find(
    (name) => name.language.name === "ja"
  )?.name;
  return japaneseName || "名前なし";
};

export const getPokemonTypes = async (types) => {
  const typeUrls = types.map((type) => type.type.url);
  const typeNames = await Promise.all(
    typeUrls.map(async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      const japaneseName = data.names.find(
        (name) => name.language.name === "ja"
      )?.name;
      return japaneseName || "タイプなし";
    })
  );
  return typeNames;
};

export const getPokemonAbilityJapaneseName = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  const japaneseName = data.names.find(
    (name) => name.language.name === "ja"
  )?.name;
  return japaneseName || "アビリティなし";
};
