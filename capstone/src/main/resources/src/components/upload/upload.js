import {Frame, Banner, ContentNav, Footer} from '../frame/frame.js';
import '../upload.css';

function Upload(){
    return(
        <div>
        <Frame/>
        <Banner name={'데이터 업로드'}/>
        <ContentNav/>
        <div className='content'>
                <div>data upload</div>
                <h3>데이터를 선택하세요 (UI미완성)</h3>
                </div>
        <Footer/>
        </div>
    );
}


export default Upload;