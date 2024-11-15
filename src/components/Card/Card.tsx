import { FC } from "react";
import "./Card.css";
import { PokemonData } from "../../utils/type";

interface CardProps {
  pokemon: PokemonData;
}

export const Card: FC<CardProps> = ({ pokemon }) => {
  const { typesInJapanese } = pokemon;

  return (
    <div className="card">
      <div className="cardImg">
        <img src={pokemon.sprites.front_default} alt="" />
      </div>
      <h3 className="cardName">{pokemon.japaneseName || pokemon.name}</h3>
      <div className="cardTypes">
        <div>タイプ</div>
        {typesInJapanese.map((type: string, index: number) => (
          <div key={index}>
            <span className="typeName">{type}</span>
          </div>
        ))}
      </div>
      <div className="cardInfo">
        <div className="cardData">
          <p className="title">重さ：{pokemon.weight / 10} kg</p>
        </div>
        <div className="cardData">
          <p className="title">高さ：{pokemon.height / 10} m</p>
        </div>
        <div className="cardData">
          <p className="title">
            とくせい
            <br />
            {pokemon.abilitiesInJapanese[0]}
          </p>
        </div>
      </div>
    </div>
  );
};
