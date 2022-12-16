import Cards from './cards/Cards';
import { pokemon } from './database/db';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const PokemonList = () => {

    const [pokemonList, setPokemonList] = useState([])

useEffect (() => {
  setPokemonList(pokemon)
},[])

    return (
    <div> {pokemonList.map((item, key)=>(
        <Link to={`/${prop.id}`}>
        <Cards key = {key} id = {item.id} img = {item.img} name = {item.name}/>
        </Link>
      ))} </div> 
    );
}

export default PokemonList
