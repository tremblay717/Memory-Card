import React from 'react';
import Game from './components/Game';
import Headbar from './components/Headbar';

function App() {

  let round = [];
  return (
    <div className="App">
      <Headbar/>
      <Game round={round} />
    </div>
  );
}

export default App;
