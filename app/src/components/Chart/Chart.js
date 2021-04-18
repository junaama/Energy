import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = () => {
    const tempData = [
        {name: "Program 1", highest: 100, lowest: 50, amt: 0},
        {name: "Program 2", highest: 150, lowest: 112, amt: 0},
        {name: "Program 3", highest: 250, lowest: 45, amt: 0},
        {name: "Program 4", highest: 115, lowest: 78, amt: 0}
    ]
return (
    <div>
        <LineChart
          width={500}
          height={300}
          data={tempData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="lowest" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="highest" stroke="#82ca9d" />
        </LineChart>
    </div>
)
}
export default Chart;