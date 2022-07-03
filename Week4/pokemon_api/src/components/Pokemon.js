import { useState, useEffect } from 'react';

const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState([]);
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon-species/')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
    });
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