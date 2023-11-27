
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { LineChart, Line } from 'recharts';
import React, { useState } from 'react';

const data = [
    {
      name: '월',
      uv: 107,
      pv: 2400,
      amt: 2400,
    },
    {
      name: '화',
      uv: 99,
      pv: 1398,
      amt: 2210,
    },
    {
      name: '수',
      uv: 80,
      pv: 9800,
      amt: 2290,
    },
    {
      name: '목',
      uv: 111,
      pv: 3908,
      amt: 2000,
    },
    {
      name: '금',
      uv: 127,
      pv: 4800,
      amt: 2181,
    },
    {
      name: '토',
      uv: 144,
      pv: 3800,
      amt: 2500,
    },
    {
      name: '일',
      uv: 150,
      pv: 4300,
      amt: 2100,
    },
  ];




function RenderChart(){


  const [isActive, setToggleState] = useState(false);
  const handleButtonClick = () => {
      // 현재 버튼 상태에 따라 반대의 상태로 변경
      setToggleState(!isActive);
    };
  
  const buttonClass = isActive ? '투명화' : '불투명화';
  const buttonClass2 = isActive ? '불투명화' : '투명화';
  const 보일까안보일까 = isActive ? '보인다' : '안보인다';
  const 안보일까보일까 = isActive ? '안보인다' : '보인다';

  return(

    <div className="차트">
      <div>차량별 이동량</div>
      <div className="토글버튼">
        <button className={buttonClass} id="혼잡도버튼" onClick={handleButtonClick}>혼잡도</button>
        <button className={buttonClass2} id="차량버튼" onClick={handleButtonClick}>차량</button>
      </div>
      <div className={보일까안보일까}>
        <RenderBarChart/>
      </div>
      <div className={안보일까보일까}>
        <RenderStringChart/>
      </div>
    </div>
  );
}

function RenderBarChart(){
    return(
      <BarChart width={450} height={350} data={data}>
        <Bar dataKey="uv" fill="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </BarChart>
    );   
}

function RenderStringChart(){

return (
    <LineChart width={450} height={350} data={data}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
    </LineChart>
  );

}

export default RenderChart;