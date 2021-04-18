import logo from './logo.png';
import './App.css';
import Chart from './components/Chart/Chart';

function App() {
  return (
    <div className="App">
      <img src={logo} height="100px" alt="Energy Logo"></img>
      <p>Hello?</p>
      <Chart/>
    </div>
  );
}

export default App;
