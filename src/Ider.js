import React from "react";
import Card from "./Card";


const Ider = ({ names }) => {
  return names.map((pokemon) => {
      return (
        <div className = 'inline' key={pokemon.name}>
          <Card 
          pokemon={pokemon}
          />
        </div>
      );
    });
 };
  


export default Ider;
