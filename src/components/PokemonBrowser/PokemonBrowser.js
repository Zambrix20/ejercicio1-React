import React, { useState, useEffect } from 'react';
import Pokemon from '../Pokemon/Pokemon';

export default function PokemonBrowser() {

    // const { pokemons } = props

    const [activePokemon, setactivePokemon] = useState(0)
    const [pokemon, setPokemon] = useState({})

    const prevPokemon = () => {
        if (activePokemon > 0) {
            setactivePokemon(activePokemon - 1)
        } else {
            alert('No more pokemons')
        }
    }

    const nextPokemon = () => {
        // if (activePokemon < pokemons.length - 1) {
        if (activePokemon < 359) {
            setactivePokemon(activePokemon + 1)
        } else {
            alert('No more pokemons')
        }
    }

    // Hacer la consulta, nos ayuda con el tema de renderizado
    useEffect(() => {
        // fetch(`https://pokeapi.co/api/v2/pokemon/${activePokemon + 1}`)
        //     .then((response) => {
        //         return response.json()
        //     })
        //     .then((data) => {
        //         setPokemon({
        //             name: data.name,
        //             id: data.id,
        //             sprite: data.sprites.front_default,
        //             types: data.types.map((type) => {
        //                 return type.type.name
        //             })
        //         })
        //     })

        async function fetchData() {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${activePokemon + 1}`)
            const data = await response.json()
            setPokemon({
                name: data.name,
                id: data.id,
                sprite: data.sprites.front_default,
                types: data.types.map((type) => {
                    return type.type.name
                })
            })
        }

        fetchData()
    }, [activePokemon])


    return (
        <div className='pokemon-browser'>
            <h1>Pokemon Browser</h1>
            {
                // pokemons.map((pokemon, index) => {
                //     return <Pokemon key={index} {...pokemon} />
                // })
                pokemon.id ? <Pokemon {...pokemon} /> : <p>Loading</p>
            }
            <button onClick={prevPokemon}>Prev</button>
            <button onClick={nextPokemon}>Next</button>
        </div>
    );

};
