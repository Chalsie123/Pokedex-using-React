import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Show from './components/Show/Show';

function App() {
  const [pokemons, updatepokemon] = useState([]);
  const [isloaded, loadedState] = useState(false);
  const [search, searchState] = useState("");

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0")
      .then(res => {
        updatepokemon(res.data)
        loadedState(true)
      })
      .catch(error => console.log(error))
  }, [])

  function changehandler(event) {
    searchState(event.target.value)
  }

  if (pokemons.results) {
    var filteredpokemons = pokemons.results.filter(pokemon =>
      pokemon.name.toLowerCase().includes(search.toLowerCase())
    )
  }

  console.log(filteredpokemons)
  return (
    <div className="App">
      <form>
      <input type="text" placeholder="Enter a Pokemon name" onChange={changehandler} ></input>
      </form>
      <h1>
        Pokedex
      </h1>
      {isloaded && filteredpokemons.map((item, index) => (
        <Show Name={item.name} key={index}></Show>
      )
      )}
    </div>
  );
}

export default App;