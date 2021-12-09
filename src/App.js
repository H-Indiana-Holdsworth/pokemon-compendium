import './App.css';
import React, { useState, useEffect } from 'react';
import { getPokemon } from './services/Pokemon';
import PokeList from './components/PokeList/PokeList';
import Controls from './components/Controls/Controls';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timer;

    const fetchData = async () => {
      const data = await getPokemon(query);
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
  }, [loading, query]);

  return (
    <div className="App">
      <h1>Pokedex</h1>
      {loading && <span className="loader"></span>}
      {!loading && (
        <>
          <Controls query={query} setQuery={setQuery} setLoading={setLoading} />
          <PokeList pokemon={pokemon} />
        </>
      )}
    </div>
  );
}

export default App;
