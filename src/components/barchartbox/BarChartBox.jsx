import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import "./barchartbox.scss";


const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
function BarChartBox() {
  return (
    <div className="barChartBox">
    <h1>Top Visit</h1>
    <div className="chart"> 
      <ResponsiveContainer width="99%" height={150}>
        <BarChart  data={data}>
        <Tooltip
          contentStyle={{background:"#2a3447",borderRadius:"5px"}}
          labelStyle={{display:"none"}}
          cursor={{fill:"none"}}
        />
          <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
     </div>
    </div>
  );
}

export default BarChartBox;