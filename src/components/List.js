import React from 'react';
import { Link } from 'react-router-dom';

const List = ({ pokemons }) => {
  return (
    <section className="list">
      {pokemons.map((pokemon) => {
        return (
          <Link
            className="list-element"
            key={pokemon.name}
            to={`/details/${pokemon.name}`}> {pokemon.name}
          </Link>
        )
      })}
    </section>

  )
}

export default List;