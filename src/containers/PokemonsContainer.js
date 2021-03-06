import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_POKEMONS } from '../graphql/get-pokemons'
import { Pokemon } from '../components/Pokemon';

export const PokemonsContainer = () => {
    const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
        variables: { first: 9 },
    });

    return (
        <div className="pokemons_container">
            {pokemons && pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
        </div>
    )
}
