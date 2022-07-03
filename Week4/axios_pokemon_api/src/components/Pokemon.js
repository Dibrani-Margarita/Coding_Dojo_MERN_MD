import { useState, useEffect } from 'react';
import axios from 'axios';

const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState([]);
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
            .then(response => {setPokemon(response.data.results)}, [])
    }, []);
    return (
        <div>
            <ul>
                {pokemon.length > 0 && pokemon.map((poke, index)=>{
                    return (<li key={index}>{poke.name}</li>)
                })}
            </ul>
            
        </div>
    );
}
export default Pokemon;