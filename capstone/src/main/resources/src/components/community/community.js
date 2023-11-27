import './community.css';

import {Frame, Banner, ContentNav, Footer} from '../frame/frame.js';


export default function Community(){
    return (
        <div>
            <Frame/>
            <Banner name={'게시판'}/>
            <ContentNav name={'게시판'}/>
            
            <div className='communityContentBox'>
                <h1>글쓰기</h1>
                <div className="formBox">
                    <form>
                        <div>
                            <label>제목</label><br/><br/>
                            <input 
                            type="text"
                            id="contentSubject"
                            placeholder='제목을 입력하세요'
                            /><br/><br/><br/>
                        </div>

                        <div>
                            <label>내용</label><br/><br/>
                            <textarea 
                            id="contentTextBox"
                            placeholder='내용을 입력하세요'>
                                </textarea><br/><br/><br/>
                        </div>

                        <div>
                            <label>이미지 삽입</label><br/><br/>
                            <input type="text"
                            placeholder='10Mb이하의 jpg, png 파일만 업로드 가능합니다.'
                            disabled
                            />
                            <button className="btnSubmit" id="btnFile">파일선택</button>
                            <button className="btnSubmit btnWhite">취소</button>
                            <br/><br/><br/><br/>
                        </div>
                    </form>
                </div>
                <div className="submit">
                    <button className ="btnSubmit">제출</button>
                    <button className ="btnSubmit btnWhite">취소</button>
                </div>
            </div>

            <Footer/>
        </div>

    );
}