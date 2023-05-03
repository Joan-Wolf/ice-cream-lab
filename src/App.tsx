import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header/Header';
import { AdDesigner } from './components/AdDesigner/AdDesigner';
import { VotesComponent } from './components/VoteHere/VoteHere';


function App() {
  return (
    <div className="App">
<Header></Header>
<div className="containers">
<AdDesigner></AdDesigner>
<VotesComponent></VotesComponent>
</div>
    </div>
  );
}

export default App;
