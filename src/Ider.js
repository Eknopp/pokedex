import React from 'react';
import Card from './Card';
import NameId from './NameId'


const Ider = ({names}) =>{

    async function getPokemonId(pokemon){
        const pokemonUrl = await fetch(pokemon.url)
            .then(response=> response.json())
            .then(res => 
                {return res});
        return pokemonUrl.id;
    }

    return names.map((pokemon)=>{
            const id = new Promise(() => getPokemonId(pokemon));
            return id ? (
                <div key={pokemon.name}> 
                <Card 
                pokeName = {pokemon.name}
                pokeId = {id}
                /> 
                </div>
            ) : (<></>)
            })
 }
    

export default Ider;
  
