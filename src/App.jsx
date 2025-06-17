import { useState, useEffect } from 'react';
import Quiz from './components/Quiz';
import PokemonApplication from './components/PokemonApplication';
import './App.css';

function App() {
  const [showQuiz, setShowQuiz] = useState(false);
  const [showPokedex, setShowPokedex] = useState(false);
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [showResult, setShowResult] = useState(false);
  const totalQuestions = 15;
  const startQuiz = () => {
    setShowQuiz(true);
    setShowPokedex(false);
  };
  const restart = () => {
    setScore(0);
    setQuestionNumber(1);
    setShowResult(false);
    setShowQuiz(false);
    setShowPokedex(false);
  };
  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    if (questionNumber < totalQuestions) {
      setQuestionNumber(prev => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="app-container" style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Pokémon Quiz</h1>

      {!showQuiz && !showResult && !showPokedex && (
        <>
          <p>Testa dina kunskaper om första generationens Pokémon!</p>
          <button onClick={() => setShowPokedex(true)} style={{ margin: '1rem' }}>Lär dig mer</button>
          <button onClick={startQuiz} style={{ margin: '1rem' }}>Starta Quiz</button>
        </>
      )}
      {showPokedex && !showQuiz && !showResult && (
        <>
          <h2>Lär dig mer om Pokémons</h2>
          <PokemonApplication />
          <button onClick={startQuiz} style={{ marginTop: '2rem' }}>Börja Quizet</button>
        </>
      )}
      {showQuiz && !showResult && (
        <>
          <p>Fråga {questionNumber} av {totalQuestions}</p>
          <Quiz onNext={handleAnswer} />
        </>
      )}
      {showResult && (
        <div>
          <h2>Resultat</h2>
          <p>Du fick {score} av {totalQuestions} rätt.</p>
          <button onClick={restart}>Spela igen</button>
        </div>
      )}
    </div>
  );
}

export default App;