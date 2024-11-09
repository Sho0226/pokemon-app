import { useEffect } from "react";
import "./App.css";
import { getAllPokemon } from "./utils/pokemon";

function App() {
  const InitialURL = "https://pokeapi.co/api/v2/pokemon";

  useEffect(() => {
    const fetchPokemonData = async () => {
      let res = await getAllPokemon(InitialURL);
      console.log(res);
    };
    fetchPokemonData();
  }, []);
  return <div className="App"></div>;
}

export default App;
