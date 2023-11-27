import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
const data = [
    {
      name: '월',
      uv: 2000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: '화',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: '수',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: '목',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: '금',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: '토',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: '일',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];


const toggle = () =>{
    const 혼잡도버튼 = document.getElementById('혼잡도버튼');
    혼잡도버튼.classList.toggle('불투명화');
    혼잡도버튼.classList.toggle('투명화');
};

const renderLineChart = (
<div className="차트">
    <div>차량별 이동량</div>
    <div className="토글버튼">
        <button className="투명화" id="혼잡도버튼" onClick={toggle}>혼잡도</button>
        <button className="불투명화" id="차량버튼" onClick={toggle}>차량</button>
    </div>
    <LineChart width={400} height={300} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
    </LineChart>
  </div>
);

export default renderLineChart;