import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_POKEMONS } from '../graphql/get-pokemons'

export const PokemonsContainer = () => {
    const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
        variables: { first: 9 },
    });

    return (
        <div className="pokemons">
            {pokemons && pokemons.map(pokemon => JSON.stringify(pokemon, null, 2))}
        </div>
    )
}