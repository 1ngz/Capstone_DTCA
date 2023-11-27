import './style/App.css';

import Introduce from './components/introduce/introduce.js';
import Login from './components/login/login.js';
import NewAccount from './components/newAccount/newAccount.js';
import NewAccoutGeneral from './components/newAccountGeneral/newAccountGeneral.js';
import NewAccoutGov from './components/newAccountGeneral/newAccountGov.js';
import Community from './components/community/community.js';
import CommunityMain from './components/community/communityMain.js';
import Upload from './components/upload/upload.js';

import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import {Maps} from './maps.js';

//<Frame/> : navigator:
//<NewAccount/>
//<Login/> : login창


/*<Introduce/>
<Login/>
<NewAccount/>
<NewAccoutGeneral/>
<NewAccoutGov/>
<Community/> 그거
<CommunityMain/> 공지사항 */
function App() {
  const [data, setData] = useState('');
  useEffect(() => {
    // Spring 서버의 엔드포인트에 GET 요청을 보냄
    axios.get('http://localhost:8080/')
      .then(response => {
        setData(response.data); // 받은 데이터를 state에 저장
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행되도록 함


  return (
    <div className="App">
      <div id ="container">
        <Router>
          <Routes>
                <Route path="/" element={<Maps/>}/>
                <Route path="/intro" element={<Introduce/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/newAccount" element={<NewAccount/>}/>
                <Route path="/notice" element={<CommunityMain/>}/>
                <Route path="/community" element={<Community/>}/>
                <Route path="/newAccountGeneral" element={<NewAccoutGeneral/>}/>
                <Route path="/newAccountGov" element={<NewAccoutGov/>}/>
                <Route path="/upload" element={<Upload/>}/>
                
          </Routes>
        </Router>
        
      </div>
    </div>
  );
}

export default App;
