import {Frame, Banner, ContentNav, Footer} from '../frame/frame.js';
import '../upload.css';

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
                        <img src="capstone/src/main/resources/public/icon구름.png"/>
                        <div className="업로드부가설명">파일을 선택하거나 드래그하여 올려주세요</div>
                        <div className="업로드부가설명 회색">10MB이하의 JPG파일만 업로드 가능</div>
                        <button id="파일선택버튼">파일 선택</button>
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