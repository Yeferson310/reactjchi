import { useParams } from "react-router-dom"
import { pokemon } from "../database/db"
import { useState, useEffect } from "react"


const Detalle = () => {

    const {id} = useParams()

    const [pokemons, setPokemons] = useState([])

    const [pokemonSeleccionado, setPokemonSeleccionado] = useState ({})

    useEffect (() => {
        setPokemons (pokemon)
    },[]) 

    useEffect (() => {
        pokemons.forEach(pokemon => {
        if (pokemon.id == id) {
            setPokemonSeleccionado(pokemon)
        }
        }) 
    
    },[id]) 


return (
        <div>
            <span> #{pokemonSeleccionado.id} </span>
            <h1>{pokemonSeleccionado.name} </h1>
            <img src= {pokemonSeleccionado.img}/>

        </div>)
}

export default Detalle 