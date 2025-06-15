Pokémon Quiz & Pokédex



Detta är en interaktiv webbapplikation byggd med React som kombinerar två delar:

1. **Pokédex-läge** – en studieyta där användaren kan läsa på om olika Pokémon.
2. **Quiz-läge** – ett spel där användaren får testa sina kunskaper i 15 frågor.

All data hämtas i realtid från [PokéAPI](https://pokeapi.co/), som innehåller detaljerad information om alla Pokémon.

---

Vad är en Pokédex?

En Pokédex är ett digitalt uppslagsverk i Pokémon-världen. Den innehåller fakta om varje Pokémon, till exempel:

- Namn
- Typ (t.ex. fire, grass)
- Vikt
- Längd
- Utseende (sprite)

I det här projektet fungerar Pokédexen som en **interaktiv faktabank** där man kan välja en Pokémon från generation 1 (de första 151) och se ovanstående information. Tanken är att användaren kan plugga innan quizet börjar.

---

Funktioner

- **Pokédex-läge:**  
  Välj valfri Pokémon och visa information direkt i gränssnittet.
  
- **Quiz-läge:**  
  En gissningslek där du får se en silhuettbild av en Pokémon + fakta (vikt, längd, typ) och ska välja rätt namn bland fyra alternativ.

- **Direkt feedback:**  
  Varje svar ger omedelbar återkoppling – rätt/fel och rätt namn visas.

- **Poängräkning och resultat:**  
  Efter 15 frågor visas användarens totala poäng.

---

Så kör du projektet


- Node.js (version 18+ rekommenderas)
- npm (ingår i Node.js)

Installera och starta

1. Klona projektet:
   ```bash
   git clone https://github.com/ditt-användarnamn/pokemon-quiz.git
   cd pokemon-quiz
Installera beroenden:


npm install

npm run dev

http://localhost:5173