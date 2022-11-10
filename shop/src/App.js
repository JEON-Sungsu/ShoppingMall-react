import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

    let [title, change] = useState(['기초수업', '심화수업', '리액트수업']);
    return (
        <div className="App">
            <div className={"nav"}>
                <h4 className="navTitle">블로그</h4>
            </div>
            <div className={"list"}>
                <h4>{title[0]}</h4>
                <p>10월 17일 발행</p>
            </div>
            <div className={"list"}>
                <h4>{title[1]}</h4>
                <p>10월 31일 발행</p>
            </div>
            <div className={"list"}>
                <h4>{title[2]}</h4>
                <p>11월 14일 발행</p>
            </div>
        </div>
    );
}

export default App;
