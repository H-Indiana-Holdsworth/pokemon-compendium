import React, { useState, useEffect } from 'react';
import './App.css';
import { getPokemon, getTypes, getCount } from './services/Pokemon';
import PokeList from './components/PokeList/PokeList';
import Controls from './components/Controls/Controls';
import Graph from './components/Graph/Graph';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState('asc');
  const [page, setPage] = useState(1);
  const [type, setType] = useState([]);
  const [selectedType, setSelectedType] = useState('All');
  const [count, setCount] = useState([]);

  useEffect(() => {
    let timer;

    const fetchData = async () => {
      const data = await getPokemon(query, order, page, selectedType);
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
  }, [loading, query, order, page, type, selectedType]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTypes();
      setType(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCount();
      setCount(data);
    };
    if (loading) {
      fetchData();
    }
  }, [count, setCount, loading]);

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
            type={type}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
          />
          <PokeList
            pokemon={pokemon}
            page={page}
            setPage={setPage}
            loading={loading}
            setLoading={setLoading}
          />
          <Graph pokemon={pokemon} count={count} setCount={setCount} loading={loading} />
        </>
      )}
    </div>
  );
}

export default App;
