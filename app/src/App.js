import logo from './logo.png';
import './App.css';
import Chart from './components/Chart/Chart';
import Devices from './components/Devices/Devices';
import Program from './components/Program/Program';
import { useState } from 'react';

function App() {
  const [prog, setProg] = useState(false);
  return (
    <div className="App" style={{width:'100%'}}>
      <div style={{position:'absolute', top:0}}>
        <img src={logo} height="100px" alt="Energy Logo"></img></div>
      <div>
      <div style={{marginTop:'5%', backgroundColor:"#013668"}}>
        <h1 style={{fontFamily:'Arial', color:"#FFF", textAlign:'left', marginLeft:'2.5%'}}>Your Devices</h1>
      <div style={{float:'left',}}><Devices/></div>
      <div style={{float:'right',}}>{!prog &&<><Chart/>
      <div style={{fontFamily:'Arial', fontWeight:'bold', color:"#FFB300"}} onClick={()=>setProg(true)}>View energy consumption by program</div></>}
      {prog &&<><Program/><div style={{fontFamily:'Arial', fontWeight:'bold', color:"#FFB300"}} onClick={()=>setProg(false)}>Back to device view</div>
     </>}</div>
      </div>
      </div>
      
    </div>
  );
}

export default App;
