import { useEffect, useState } from "react";
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

function App() {
  const InitialURL = "https://pokeapi.co/api/v2/pokemon";
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);
  const [nextURl, setNextURL] = useState("");
  const [prevURL, setPrevURL] = useState("");

  useEffect(() => {
    const fetchPokemonData = async () => {
      let res = await getAllPokemon(InitialURL);
      await loadPokemon(res.results);
      console.log(res.results);
      setNextURL(res.next);
      setPrevURL(res.previous);
      setLoading(false);
    };
    fetchPokemonData();
  }, []);

  const loadPokemon = async (data) => {
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
        };
      })
    );
    setPokemonData(_pokemonData);
  };

  const handlePrevPage = async () => {
    if (!prevURL) return;
    setLoading(true);
    let data = await getAllPokemon(prevURL);
    await loadPokemon(data.results);
    setNextURL(data.next);
    setPrevURL(data.previous);
    setLoading(false);
  };

  const handleNextPage = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextURl);
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
