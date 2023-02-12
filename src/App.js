import React from 'react';
import './App.css';
import SearchBox from './SearchBox';
import Ider from './Ider';


class App extends React.Component {
  constructor(){
    super()
    this.state= {
      searchField:'',
      pokemon:[]
    }
  }


  onSearchChange = (event) =>{
    this.setState({searchField: event.target.value});
  }


  render(){
    const { searchField } = this.state;
    const { pokemon } = this.state;

    fetch('https://pokeapi.co/api/v2/pokemon/?limit=1008')  
    .then(response => response.json())
    .then(data => data.results)
    .then(pokeList => this.setState({pokemon: pokeList}))
    .catch('error');
     
    const filteredPokemon = pokemon.filter(pokemon =>{
      return pokemon.name.toLowerCase().includes(searchField.toLowerCase());
    } )

     
  
      if (!searchField.length){
        return(
        <div className='tc'>
          <h1 className='pokeText title'>Pokedex</h1>
          <SearchBox searchChange = {this.onSearchChange} />
        </div>
        )


      } else if (searchField.length > 0 && filteredPokemon.length == 0 ) {
        return(        
        <div className = 'tc'>
          <h1 className='pokeText title'>Pokedex</h1>
          <SearchBox searchChange = {this.onSearchChange} />
          <h1 className='noPo'>No such pokemon</h1>
        </div>
        )


      } else {
        return(
          <div className='tc'>
            <h1 className='pokeText title'>Pokedex</h1>
            <SearchBox searchChange = {this.onSearchChange} />
            <br></br>
            <Ider names={filteredPokemon}/>
        </div>
        )
      }
  }
}

export default App;
