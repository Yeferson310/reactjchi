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

    // detalle es el encargado de mosrar el detalle del pokemon cuando el usuario clickea en un pokemon 
    // el pokemons es el estado en el quue guardo la base de dato para trabajar en ella, ahora accedo para ver el pokemon que el usuario clickeo
    // se filtra segun el id, con el metodo filter 

return (
        <div>
            {pokemons.filter(pokemon => pokemon.id == id).map(pokemonSeleccionado => (
              <div>  
                    <span> #{pokemonSeleccionado.id} </span>
                    <h1>{pokemonSeleccionado.name} </h1>
                    <img src= {pokemonSeleccionado.img}/>
              </div>
            ))} 
            

        </div>)
}

export default Detalle 