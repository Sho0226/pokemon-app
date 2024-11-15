import { useEffect, useState } from "react";
import React from "react";
import "./App.css";
import {
  getAllPokemon,
  getPokemon,
  getPokemonAbilityJapaneseName,
  getPokemonJapaneseName,
  getPokemonTypes,
} from "./utils/pokemon";
import { Card } from "./components/Card/Card";
import { Navbar } from "./components/Navbar/Navbar";
import { ApiResponse, PokemonData } from "./utils/type";

function App() {
  const InitialURL = "https://pokeapi.co/api/v2/pokemon";
  const [loading, setLoading] = useState<boolean>(true);
  const [pokemonData, setPokemonData] = useState<PokemonData[]>([]);
  const [nextURl, setNextURL] = useState<string>("");
  const [prevURL, setPrevURL] = useState<string | null>("");

  useEffect(() => {
    const fetchPokemonData = async () => {
      let res: ApiResponse = await getAllPokemon(InitialURL);
      await loadPokemon(res.results);
      // console.log(res);
      setNextURL(res.next);
      setPrevURL(res.previous);
      setLoading(false);
    };
    fetchPokemonData();
  }, []);

  const loadPokemon = async (data: { url: string }[]) => {
    let _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonRecord = await getPokemon(pokemon.url);
        const japaneseName = await getPokemonJapaneseName(
          pokemonRecord.species.url
        );
        const pokemonTypes = await getPokemonTypes(pokemonRecord.types);
        const abilityPromises = pokemonRecord.abilities.map(async (ability) => {
          return await getPokemonAbilityJapaneseName(ability.ability.url);
        });
        const japaneseAbilities = await Promise.all(abilityPromises);

        return {
          ...pokemonRecord,
          japaneseName,
          typesInJapanese: pokemonTypes,
          abilitiesInJapanese: japaneseAbilities,
        } as PokemonData;
      })
    );
    setPokemonData(_pokemonData);
  };

  const handlePrevPage = async (): Promise<void> => {
    if (!prevURL) return;
    setLoading(true);
    let data: ApiResponse = await getAllPokemon(prevURL);
    await loadPokemon(data.results);
    setNextURL(data.next);
    setPrevURL(data.previous);
    setLoading(false);
  };

  const handleNextPage = async (): Promise<void> => {
    setLoading(true);
    let data: ApiResponse = await getAllPokemon(nextURl);
    await loadPokemon(data.results);
    setNextURL(data.next);
    setPrevURL(data.previous);
    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <div className="App">
        {loading ? (
          <h1>ロードちゅう...</h1>
        ) : (
          <>
            <div className="pokemonCardContainer">
              {pokemonData.map((pokemon, i) => {
                return <Card key={i} pokemon={pokemon} />;
              })}
            </div>
            <div className="btn">
              <button onClick={handlePrevPage}>前へ</button>
              <button onClick={handleNextPage}>次へ</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
