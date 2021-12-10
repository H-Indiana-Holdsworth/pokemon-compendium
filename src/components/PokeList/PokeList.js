import React from 'react';
import './PokeList.css';

export default function PokeList({ pokemon, page, setPage, setLoading }) {
  const handleNextPage = () => {
    setPage((prevState) => ++prevState);
    setLoading(true);
  };

  const handlePrevPage = () => {
    setPage((prevState) => --prevState);
    setLoading(true);
  };

  return (
    <div>
      <div className="display">
        <div className="pokes">
          {pokemon.map((poke) => (
            <p key={poke.id}>
              {poke.pokemon}
              <img key={poke.url_image} src={poke.url_image} height="100px" />
              <span>Attack: {poke.attack}</span>
              <span>Defense: {poke.defense}</span>
              <span>HP: {poke.hp}</span>
              <span>Speed: {poke.speed}</span>
              <span>Shape: {poke.shape}</span>
            </p>
          ))}
        </div>
      </div>
      <div>Page:{page}</div>
      <button onClick={handlePrevPage}>Previous Page</button>
      <button onClick={handleNextPage}>Next Page</button>
    </div>
  );
}
