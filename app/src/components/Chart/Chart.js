import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area } from 'recharts';

const Chart = () => {
  
    const tempData = [
        {name: "1618757596", power: 24.2, },
        {name: "1618757578", power: 23.8, },
        {name: "1618757563", power: 23.4, },
        {name: "1618757552", power: 23.9, }
    ]
return (
    <div style={{fontFamily:'Arial', color:"#FFF"}}>
        <LineChart
          width={1400}
          height={500}
          style={{fontFamily:'Arial', color:"#FFF"}}
          data={tempData}
          margin={{
            top: 5,
            right: 50,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" style={{color:"#FFF"}} />
          <YAxis />
          <Tooltip labelStyle={{fontFamily:'Arial', color:"#FFF"}} />
          <Legend />
          <Line type="monotone" dataKey="power" stroke="#013668" strokeWidth="3"/>
          <Area type="monotone" dataKey="power" fillOpacity={0.25} fill="url(#090979)" />
        </LineChart>
    </div>
)
}
export default Chart;