import {Frame, Banner, ContentNav, Footer} from '../frame/frame.js';
import './upload.css';


import React, { useState } from 'react';

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  // 파일 선택 시 호출되는 이벤트 핸들러
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  // 파일 업로드 버튼 클릭 시 호출되는 이벤트 핸들러
  const handleUpload = () => {
    if (selectedFile) {
      //console.log('Selected file:', selectedFile);
    } else {
      alert('파일을 먼저 선택하세요.');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>업로드</button>
      {selectedFile && (
        <div>
          <p>선택한 파일: {selectedFile.name}</p>
          <img src={URL.createObjectURL(selectedFile)} alt="선택한 파일 미리보기" style={{ maxWidth: '200px', maxHeight: '100px' }} />
        </div>
      )}
    </div>
  );
};


function Upload(){
    return(
        <div>
        <Frame/>
        <Banner name={'데이터 업로드'}/>
        <ContentNav/>
            <div className='uploadContentBox'>
                <div className="uploadBox">
                    <p id="업로드설명">파일 업로드 관련 설명</p>
                    <div className="fileBox">
                        <img src="icon구름.png" width="60px"/>
                        <div className="업로드부가설명">파일을 선택하거나 드래그하여 올려주세요</div>
                        <div className="업로드부가설명 회색">10MB이하의 JPG파일만 업로드 가능</div>
                        <ImageUpload/>
                    </div>
                    <div>
                        <button>제출</button>
                        <button>취소</button>
                    </div>
                </div>

                <div className="uploadBox">데이터 업로드 화면</div>
            </div>
        <Footer/>
        </div>
    );
}


export default Upload;