import React, { useState, useEffect } from "react";
import "./Card.css";

const Card = ({ pokemon }) => {
  const [id, setId] = useState(null);


  useEffect(()=>{
    fetch(pokemon.url)
      .then((response) => {
         return response.json();
    })
    .then((data) => {
       setId(data.id);
    });
  });



  return (
    <div className="f7 tc bg-light-green dib br3 pa3 ma2 bw2 shadow-5 inline">
      <>
        <img alt = 'pokemon' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} />
        <h1>{pokemon.name}</h1>
        <h1>{id}</h1>
      </>
    </div>
  );
};

export default Card;
