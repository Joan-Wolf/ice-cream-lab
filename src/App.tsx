import React, { useState } from 'react';
import './App.css';
import { Home } from './components/Home/Home';
import { AdDesigner } from './components/AdDesigner/AdDesigner';
import { PlayerList } from './components/PlayerList/PlayerList';
import { Player } from './models/Player';



function App() {


  const [players, setPlayers] = useState<Player[]>([{name: "Fox", score: 12}, {name: "Turtle", score: 11}])

  return (
    <div className="App">
<PlayerList players={players} onAdd={newPlayer => setPlayers([newPlayer, ...players])}></PlayerList>
    </div>
  );
}

export default App;
