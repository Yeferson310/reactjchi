import logo from './logo.svg';
import './App.css';
import cards from './cards/cards';
import { pokemon } from './database/db';
import { useState, useEffect } from 'react';

function App() {

const [pokemonList, setPokemonList] = useState([])

useEffect (() => {
  setPokemonList(pokemon)
},[])


  return (
    <div> {pokemonList.map((item, key)=>(
      <cards key = {key} id = {item.id} img = {item.img} name = {item.name}/>
    ))} </div> 
  );
}

export default App;
