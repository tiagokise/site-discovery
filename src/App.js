import React from 'react';
import './App.css';
import { Earth } from './components/Earth';
import { RocketA } from './components/RocketA';
import { RocketB } from './components/RocketB';


function App() {

  return (
    <div className="App">
      <RocketA/>
      <RocketB/>
      <Earth/>
    </div>
  );
}

export default App;