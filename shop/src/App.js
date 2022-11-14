/* eslint-disable */

import './App.css';
import {useState} from 'react';

function App() {

    let [title, change] = useState(['기초수업', '심화수업', '리액트수업', 'Java', 'Spring', 'vueJS']);
    let [like, setLikeCounter] = useState([0,0,0,0,0,0]);
    let [modal, setModal] = useState('hide');
    let [modalTitle, setModalTitle] = useState(0);
    let [inputVal, setValue] = useState('');

    function likeCounting(index){
        const likeArr = [...like];
        likeArr[index]++
        setLikeCounter(likeArr);
    }

    function titleSorting() {
        const ordering = [...title];
        ordering.sort();
        change(ordering);
    }

    function modalOpen(){
        setModal('show')
    }

    function modalClose(){
        setModal('hide')
    }

    return (
        <div className="App" >
            <div className={"nav"} onClick={modalClose}>
                <h4 className="navTitle">블로그</h4>
            </div>

            <button onClick={titleSorting}>ㄱㄴㄷ순 정렬</button>


            {
                title.map(function (a, b) {
                    return (
                        <div className={"list"} key={b}>
                            <h4 onClick={(e) => {modalOpen(); setModalTitle(b); }}>{a} <span onClick={(e) => {likeCounting(b); e.stopPropagation()}}>👍</span> {like[b]}</h4>
                            <p>10월 31일 발행</p>
                            <button type={"button"} style={{marginTop: '10px'}} onClick={() => {
                                const titleCopy = [...title].filter((item) =>{
                                  return item !== a;
                                })
                                change(titleCopy);
                            }}>게시글 삭제</button>
                        </div>
                    )
                })
            }

            <div style={{display:"flex",justifyContent:"center",marginTop:"20px"}}>
                <input type={"text"} onChange={ (e) => {setValue(e.target.value)}  }></input>
                <button type={"button"} onClick={
                    () => {
                        change(title => [...title, inputVal])
                    }
                }>게시글 추가</button>
            </div>
            {
                modal == 'show' ? <Modal title={title} modalTitle ={modalTitle} /> : null
            }

        </div>
    );
}

// 현재 Modal 은 App 에서 그려지고 있기 때문에, 서로 부모와 자식 관게가 성립된다. 그리고 부모에 선언된 state 를 사용하기 위해서는
// props 를 사용하면 된다.
function Modal(props) {
    return (
        <div className="modal">
            <h4>{props.title[props.modalTitle]}</h4>
            <p>날짜</p>
            <p>상세내용</p>
            <button type={"button"}>수정하기</button>
        </div>
    )
}

export default App;
