/* eslint-disable */

import './App.css';
import {useState} from 'react';

function App() {

    let [title, change] = useState(['기초수업', '심화수업', '리액트수업','Java','Spring','vueJS']);
    let [like, likeChange] = useState(0);
    let [modal, setModal ] = useState('hide')

    function titleSorting(){
        const ordering = [...title];
        ordering.sort();
        change(ordering);
    }

    return (
        <div className="App">
            <div className={"nav"}>
                <h4 className="navTitle">블로그</h4>
            </div>

            <button onClick={titleSorting}>ㄱㄴㄷ순 정렬</button>
            <button>강의 변경</button>

            <div className={"list"}>
                <h4>{title[0]} <span onClick={() => {likeChange(like++)}} >👍</span> { like }</h4>
                <p>10월 17일 발행</p>
            </div>
            <div className={"list"}>
                <h4>{title[1]} <span>👍</span> { like }</h4>
                <p>10월 31일 발행</p>
            </div>
            <div className={"list"}>
                <h4 onClick={()=>{
                    setModal('show')
                }}>{title[2]} <span>👍</span> { like }</h4>
                <p>11월 14일 발행</p>
            </div>

            {
                modal == 'show' ? <Modal/> : null
            }

        </div>
    );
}

function Modal() {
    return (
        <div className="modal">
            <h4>제목</h4>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    )
}


export default App;
