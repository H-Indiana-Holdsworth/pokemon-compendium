import { Button } from '@mui/material';
import React from 'react';

export default function Controls({
  query,
  setQuery,
  setLoading,
  order,
  setOrder,
  type,
  selectedType,
  setSelectedType,
}) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search pokemans"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />

      <select value={order} onChange={(e) => setOrder(e.target.value)}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>

      <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
        <option value="All">All</option>
        {type.map((typ) => (
          <option key={typ} value={typ}>
            {typ}
          </option>
        ))}
      </select>

      <Button variant="contained" onClick={() => setLoading(true)}>
        Search
      </Button>
    </div>
  );
}
