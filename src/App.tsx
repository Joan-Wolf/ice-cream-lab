import React, { useState } from 'react';
import './App.css';
import { Home } from './components/Home/Home';
import { AdDesigner } from './components/AdDesigner/AdDesigner';
import { PlayerList } from './components/PlayerList/PlayerList';
import { Player } from './models/Player';



function App() {

  const [players, setPlayers] = useState<Player[]>([])
  return (
    <div className="App">
<PlayerList onAdd={newPlayer => setPlayers([newPlayer, ...players])}></PlayerList>
    </div>
  );
}

export default App;
