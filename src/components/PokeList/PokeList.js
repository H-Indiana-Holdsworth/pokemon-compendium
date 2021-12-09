import React from 'react';

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
      {pokemon.map((poke) => (
        <p key={poke.id}>
          {poke.pokemon}
          <img key={poke.id} src={poke.url_image} height="100px" />
        </p>
      ))}
      <div>Page:{page}</div>
      <button onClick={handlePrevPage}>Previous Page</button>
      <button onClick={handleNextPage}>Next Page</button>
    </div>
  );
}
