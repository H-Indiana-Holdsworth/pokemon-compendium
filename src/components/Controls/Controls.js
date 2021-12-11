import { Button, MenuItem, Select, TextField } from '@mui/material';
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
      <TextField
        id="filled-basic"
        label="Filled"
        variant="filled"
        type="text"
        placeholder="Search pokemans"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />

      <Select value={order} onChange={(e) => setOrder(e.target.value)}>
        <MenuItem value="asc">Ascending</MenuItem>
        <MenuItem value="desc">Descending</MenuItem>
      </Select>

      <Select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
        <MenuItem value="All">All</MenuItem>
        {type.map((typ) => (
          <MenuItem key={typ.id} value={typ}>
            {typ}
            console.log(typ)
          </MenuItem>
        ))}
      </Select>

      <Button
        sx={{ backgroundColor: 'success.main' }}
        variant="contained"
        onClick={() => setLoading(true)}
      >
        Search
      </Button>
    </div>
  );
}
