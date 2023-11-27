import React, { useEffect } from 'react';
import { Frame, Footer } from './components/frame/frame.js';

import './maps.css';





function NaverMaps() {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=di9lw1dnxq';

    script.onload = () => {
      const map = new window.naver.maps.Map('map', {
        center: new window.naver.maps.LatLng(37.563573, 127.173146),
        zoom: 10,
        minZoom: 13, // 읍면동 레벨
    });

    const markers = [
      {
        position: new window.naver.maps.LatLng(37.5509654, 127.1470982),
        title: 1,
      },
      {
        position: new window.naver.maps.LatLng(37.598997, 127.131314),
        title: 2,
      },
      {
        position: new window.naver.maps.LatLng(37.522287, 127.205922),
        title: 3,
      },
      {
        position: new window.naver.maps.LatLng(37.1, 127.1),
        title: 4,
      },
      {
        position: new window.naver.maps.LatLng(37.11, 127.11),
        title: 5,
      },
    ];

      markers.forEach((markerInfo) => {
      const marker = new window.naver.maps.Marker({
        position: markerInfo.position,
        map: map,
        title: markerInfo.title,
      });

      window.naver.maps.Event.addListener(marker, 'click', () => {
      // 클릭된 마커의 정보를 이용하여 원하는 동작 수행
      // /요청/marker.title 보내고 받은 데이터에 module 출력
      
      const infoWindow = new window.naver.maps.InfoWindow({
        anchorSkew: true
      });
      
      const testData = '마커 정보';
      infoWindow.setContent([//내부 복잡도 올리면 될듯..?
      `<div id="modal" style="padding:10px;min-width:500px;line-height:150%;height:300px">
      ${testData}
      <input type="text"
      placeholder='날짜'
      />
      <input type="text"
      placeholder='시간'
      />
    </div>`
      ].join('\n'));

      infoWindow.open(map,marker.position);
      
      //alert(`마커 클릭: ${marker.position},${marker.title}`);

    });    
  });

    };

    document.head.appendChild(script);
  }, []);


  return (
    <div id="map" style={{ width: '1200px', height: '768px' }}></div>
  );
}


export function Maps(){
  return(
    <div id="지도박스">
      <Frame/>
      <div className = "displayRow">
        <div className ="지도검색창">
            <form className="mapBox">
              <input type="text"
              placeholder='주소를 입력해주세요'
              id="주소검색창"/>
            </form>
            <div className='mapBox'>
              <div>강동</div>
            </div>

            <div className='mapBox'>구리</div>
            <div className='mapBox'>강남</div>
            <div className='mapBox'>추가선택</div>
            <div className='mapTest'>
              <img src="graphCongest.png"
              width="100%"/>
            </div>
        </div>
        <div className="NaverMaps">
          <NaverMaps/>
          <br/><br/><br/>
        </div>
      </div>
      <BottomNav/>
      <Footer/>
    </div>
  );
}


function BottomNav(){
  return (
    <div class="bottomNav displayRow">
      <div class="다른페이지안내">
        <img src="iconBoard.png"/>
        <div>공지사항</div>
      </div>
      <div class="다른페이지안내">
        <img src="iconCommunity.png"/>
        <div>커뮤니티</div>
      </div>
      <div class="다른페이지안내">
        <img src="iconHand.png"/>
        <div>인사말</div>
      </div>
      <div class="다른페이지안내">
        <img src="iconInfo.png"/>
        <div>홈페이지 안내</div>
      </div>
    </div>
  );
}