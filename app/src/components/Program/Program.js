import React, { useEffect } from 'react';
import dev from '../../app.png';
 import axios from 'axios';
const Program = () => {
    const tempData = [
        {name: "foo.exe", consumed: "350", equivalence: "leaving the lightbulb on for 6 minutes"},
        {name: "helloworld.c", consumed: "300", equivalence: "making one cup of coffee"},
        {name: "calhacks.exe", consumed: "600", equivalence: "making two cups of coffee"},
        {name: "abc.exe", consumed: "45", equivalence: "charging your phone for a second"},
    ]
    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://us-central1-aiot-fit-xlab.cloudfunctions.net/energymongetreadings',
            
          }).then(function (response) {
            console.log(response);
          });
    });
    
    const mapping = tempData.map((item)=>{
        return (
            <div style={{fontFamily:'Arial', fontWeight:'bold', display:'inline'}}>
                <div style={{borderStyle:"solid", borderColor:"#EAEAEA", backgroundColor:"#fafafa", borderWidth:2, borderRadius:20, marginBottom:'1.5%', marginRight:'1.5%'}}>
                <img src={dev} style={{height:100, width:100, float:'left'}}></img>
                <div style={{textAlign:'left', width:1450, lineHeight:0.8}}><p> {item.name}</p>
                <p>{item.consumed} J Consumed</p>
                <p style={{fontSize:12}}> Equivalent to a {item.equivalence}</p></div>
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
export default Program;