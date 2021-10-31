import './App.css';
import { Earth } from './components/Earth/Earth';
import { RocketA } from './components/RocketA/RocketA';
import { RocketB } from './components/RocketB/RocketB';


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