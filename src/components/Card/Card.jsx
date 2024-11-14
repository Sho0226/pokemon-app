import React from "react";
import "./Card.css";

export const Card = ({ pokemon }) => {
  const types = Array.isArray(pokemon.typesInJapanese)
    ? pokemon.typesInJapanese
    : pokemon.typesInJapanese.split(" / ");

  return (
    <div className="card">
      <div className="cardImg">
        <img src={pokemon.sprites.front_default} alt="" />
      </div>
      <h3 className="cardName">{pokemon.japaneseName || pokemon.name}</h3>
      <div className="cardTypes">
        <div>タイプ</div>
        {types.map((type, index) => (
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
