import React from 'react';

export default function PokeList({ pokemon }) {
  return (
    <div>
      {pokemon.map((poke) => (
        <p key={poke.id}>
          {poke.pokemon}
          <img key={poke.id} src={poke.url_image} height="100px" />
        </p>
      ))}
    </div>
  );
}
