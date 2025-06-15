import { useState, useEffect } from 'react';
import Pokemon from './Pokemon';

function PokemonApplication() {

  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [pokemonInfo, setPokemonInfo] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then(res => res.json())
      .then(data => setPokemonList(data.results))
      .catch(err => console.log("Något gick fel med listan:", err));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!selectedPokemon) return;

    fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`)
      .then(res => res.json())
      .then(data => setPokemonInfo(data))
      .catch(err => console.log("Kunde inte hämta Pokémon:", err));
  };

  return (
    <>
      <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
        <label htmlFor="pokemon">Välj en Pokémon:</label>
        <select
          id="pokemon"
          onChange={(event) => setSelectedPokemon(event.target.value)}
          defaultValue=""
        >
          <option value="" disabled>-- Välj --</option>
          {pokemonList.map((pokemon, index) => (
            <option key={index} value={pokemon.name}>{pokemon.name}</option>
          ))}
        </select>
        <button type="submit" style={{ marginLeft: '0.5rem' }}>Visa</button>
      </form>

      {pokemonInfo && <Pokemon pokemonInfo={pokemonInfo} />}
    </>
  );
}

export default PokemonApplication;
