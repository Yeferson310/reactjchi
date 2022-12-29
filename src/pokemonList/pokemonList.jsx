import Cards from '../cards/Cards';
import { pokemon } from '../database/db';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Search from '../componentes/Search';


const PokemonList = () => {

    const [pokemonList, setPokemonList] = useState([])

useEffect (() => {
  setPokemonList(pokemon)
},[])

// pokemonlist es el encargado de mostrar todos los pokemones, la pantalla principal

    return (
    <div>    
       {pokemonList.map((item, key)=>(
        <Link to={`/${item.id}`}>
        <Cards key = {key} id = {item.id} img = {item.img} name = {item.name}/>
        </Link>
      ))} </div> 
    );
}

export default PokemonList
