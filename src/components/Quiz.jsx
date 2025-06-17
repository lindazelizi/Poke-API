import { useEffect, useState } from "react";

function Quiz({ onNext }) {
  const [pokemon, setPokemon] = useState(null);
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const fetchQuizData = async () => {
    setLoading(true);
    setSelected(null);
    setIsCorrect(null);

    const getRandomId = () => Math.floor(Math.random() * 151) + 1;

    try {
      const idSet = new Set();
      while (idSet.size < 4) {
        idSet.add(getRandomId());
      }
      const results = await Promise.all(
        Array.from(idSet).map(id =>
          fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => res.json())
        )
      );
      const correct = results[Math.floor(Math.random() * results.length)];
      setPokemon(correct);
      setOptions(results.map(p => p.name));
    } catch (err) {
      console.error("Fel vid hämtning av Pokémondata", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuizData();
  }, []);
  const handleGuess = (name) => {
    setSelected(name);
    setIsCorrect(name === pokemon.name);
  };

  const handleNext = () => {
    onNext(isCorrect);
    fetchQuizData();
  };

  return (
    <div>
      <h2>Vilken Pokemon?</h2>

      {loading && <p>Laddar fråga...</p>}

      {!loading && pokemon && (
        <div>
          <img
            src={pokemon.sprites.front_default}
            alt="Pokemon"
            style={{
              filter: selected ? "brightness(1)" : "brightness(0)",
              height: "150px",
              marginBottom: "1rem",
            }}
          />
          <div style={{ marginBottom: "1rem" }}>
            <p>Vikt: {pokemon.weight} kg</p>
            <p>Längd: {pokemon.height} m</p>
            <p>Typ: {pokemon.types.map(t => t.type.name).join(", ")}</p>
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            {options.map((name) => (
              <button
                key={name}
                onClick={() => handleGuess(name)}
                disabled={selected !== null}
                style={{
                  padding: "0.5rem 1rem",
                  fontSize: "1rem",
                  cursor: "pointer",
                  color: "black",
                  backgroundColor:
                    selected === name
                      ? name === pokemon.name
                        ? "lightgreen"
                        : "salmon"
                      : "white",
                }}
              >
                {name}
              </button>
            ))}
          </div>
          {selected && (
            <div style={{ marginTop: "1rem" }}>
              <p>{isCorrect ? "Rätt!" : `Fel! Rätt svar: ${pokemon.name}`}</p>
              <button onClick={handleNext}>Nästa</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Quiz;