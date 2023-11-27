import './community.css';

import {Frame, Banner, ContentNav, Footer} from '../frame/frame.js';

function 게시글({data}){    
    return (
    <div className='displayRow 게시글'>
        <div>{data.number}</div>
        <div>
            <a href='/1'>{data.subject}</a>
        </div>
        <div>{data.view}</div>
    </div>
    );
}

export default function CommunityMain({subject}){ 
    const 양식 = {
        number : '글 번호',
        subject : '제목',
        view : '조회수'
    }
    const data =[{
        number:'001',
        subject:'제목예시 제목입니당',
        view:'7'
    },{
        number:'002',
        subject:'실화냐 어쩌구 저쩌구 ',
        view:'27'
    },{
        number:'003',
        subject:'제목입니다 아무말대잔치',
        view:'15'
    },{
        number:'004',
        subject:'제목입니다 아무말대잔치',
        view:'15'
    },{
        number:'005',
        subject:'제목입니다2 아무말대잔치',
        view:'22'
    }];

    return (
        <div>
            <Frame/>
            <Banner name={subject}/>
            <ContentNav name={'공지사항'}/>

            <div className='communityContentBox'>
                <h1>{subject}</h1>
                    <div>
                        <div className="양식">
                        <게시글 data={양식}/>
                        </div>
                        <게시글 data={data[0]}/>
                        <게시글 data={data[1]}/>
                        <게시글 data={data[2]}/>
                        <게시글 data={data[3]}/>
                        <게시글 data={data[4]}/>
                    </div>
            </div>

            <Footer/>
        </div>

    );
}