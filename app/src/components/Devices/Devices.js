import React from 'react';
 import './devices.css';
 import dev from '../../pc.png';
const Devices = () => {
    const tempData = [
        {name: "1", energy: "23.9"},{name: "2", energy: "45", grid:'NWPP'},{name: "3", energy: "100", grid:'NWPP'},{name: "4", energy: "145", grid:'NWPP'}
    ]
    const mapping = tempData.map((item)=>{
        return (
            <div className="device">
                <div style={{borderColor:'#49a9fc', borderWidth:2, width:400, height:100, backgroundColor:'#f0f8ff', borderRadius:20, borderStyle:'solid', marginBottom:'5%'}}>
                <img src={dev} style={{float:'left', height:100}}></img>
                <div style={{float:'right', display:'block', marginRight:'5%'}}><p style={{alignSelf:'flex-start', color:"#013668"}}>Device {item.name}</p>
            <p style={{alignSelf:'flex-start', color:"#013668"}}>{item.energy} kJ</p></div>
            </div>
            </div>
        )
    })
    return (
        <div>
        {mapping}
        </div>
    )
}

export default Devices;