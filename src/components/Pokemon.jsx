function Pokemon({ pokemonInfo }) {
  return (
    <div style={{ marginTop: '1rem' }}>
    
      <h1>{pokemonInfo?.name}!</h1>
      <img
        src={pokemonInfo?.sprites?.front_default}
        alt={pokemonInfo?.name}
      />

      <p>Vikt: {pokemonInfo?.weight} kg</p>
      <p>Längd: {pokemonInfo?.height} m</p>
      <p>Typ: {pokemonInfo?.types?.map(t => t.type.name).join(', ')}</p>
    </div>
  );
}

export default Pokemon;