import logo from './logo.png';
import './App.css';
import Chart from './components/Chart/Chart';
import Devices from './components/Devices/Devices';
import Program from './components/Program/Program';

function App() {
  return (
    <div className="App">
      <img src={logo} height="100px" alt="Energy Logo"></img>
      <Chart/>
      <Devices/>
      <Program/>
    </div>
  );
}

export default App;
