import './App.css';
import React, { useState, useEffect } from 'react';
import { getPokemon } from './services/Pokemon';
import PokeList from './components/PokeList/PokeList';
import Controls from './components/Controls/Controls';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState('asc');
  const [page, setPage] = useState(1);

  useEffect(() => {
    let timer;

    const fetchData = async () => {
      const data = await getPokemon(query, order, page);
      setPokemon(data.results);
      timer = setTimeout(() => {
        setLoading(false);
      }, 1800);
    };

    if (loading) {
      fetchData();
    }

    return () => {
      clearInterval(timer);
    };
  }, [loading, query, order, page]);

  return (
    <div className="App">
      <h1>Pokedex</h1>
      {loading && <span className="loader"></span>}
      {!loading && (
        <>
          <Controls
            query={query}
            setQuery={setQuery}
            setLoading={setLoading}
            order={order}
            setOrder={setOrder}
            page={page}
            setPage={setPage}
          />
          <PokeList
            pokemon={pokemon}
            page={page}
            setPage={setPage}
            loading={loading}
            setLoading={setLoading}
          />
        </>
      )}
    </div>
  );
}

export default App;
