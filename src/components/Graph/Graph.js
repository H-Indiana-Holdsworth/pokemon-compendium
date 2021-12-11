import React from 'react';
import { VictoryBar, VictoryChart } from 'victory';

export default function Graph({ count, pokemon }) {
  return (
    <div>
      <div className="graph">
        {pokemon.map((poke) => (
          <div key={poke.id}>
            <span>{poke.count}</span>
          </div>
        ))}
      </div>
      <VictoryChart>
        <VictoryBar count={count} y={pokemon.type} />
      </VictoryChart>
    </div>
  );
}
