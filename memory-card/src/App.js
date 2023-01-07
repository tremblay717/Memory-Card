import React, { useState } from 'react';
import Game from './components/Game';
import Headbar from './components/Headbar';

function App() {

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div className="App">
      <Headbar score={score} bestScore={bestScore}/>
      <Game score={score} setScore={setScore}/>
    </div>
  );
}

export default App;
