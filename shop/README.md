# 쇼핑몰 만들기 - 리액트 프로젝트
<br><br>

## 리액트는 왜 쓰는가

- 새로고침 없이 부드럽게 작동하는 싱글페이지 어플리케이션을 만들기 위해서임.
- 리액트 장점
    - html 재사용이 편리하다.
    - 같은 문법으로 앱 개발도 가능함

<br><br>

## 리액트 개발환경 세팅

1. Node.js 설치
2. 디렉토리를 하나 만들어서 해당 디렉토리에 터미널 열고 아래의 명령어를 실행시킨다.

- create React app 이라는 라이브러리 설치하는 명령어이다. 이 라이브러리는 리액트 프로젝트를 쉽게 생성해주는 친구이다.
- 수동으로 해도 되지만, npm 으로 하는게 편함.

```
sudo npx create-react-app 작명
```

3. 그러면 디렉토리 안에 내가 작명한 이름으로 폴더가 하나 생김. 해당 폴더를 에디터에 프로젝트 임포트 해준다(열어준다)

4. 해당 리포지토리 src > App.js 파일이 메인으로 사용할 거시기이다.

5. 터미널에서 npm start 명령어 입력하면 라이브서버처럼 미리보기 화면이 뜬다.

6. 생성된 프로젝트 폴더 설명

- npm_modules 폴더 : 각종 라이브러리들 모아둔 폴더
- public 폴더 : static 에 들어갈 파일들 저장하는곳 (html,css,images)
- src 폴더 : 메인 소스 코드 보관 폴더
- package.json : 프로젝트 정보들 기입되어있는 파일.

<br><br>

## JSX 언어

- 리액트는 html 에 퍼블리싱을 하는게 아니고 js 파일에서 퍼블리싱을 하는데, 이떄 사용되는 언어가 jsx 언어라는 것임.
- 그냥 html 하고 거의 동일하다고 생각하면 된다.
- 이걸 쓰는 이유 원래 리액트에서 html 엘리먼트를 만들려면 아래 처럼 만들어야 하는데, 굳이 이렇게 안하고 간단하게 만들어 줄 수
  있기 때문임.

```
React.createElement('div',null,'hello world') 
```

- JSX 에서 태그에 클래스를 사용하려면, className 으로 해야된다.
- {}중괄호 문법 (데이터 바인딩)
    - react 에서는 변수수를 태그내에 넣기 위해서는, 그냥 태그에서 중괄호를 열고 변수명을 넣어주면 된다. ES6 에서 ${}하고 비슷한 느낌이다.
    - 모든곳에서 다 사용할 수 있음.
- 스타일을 태그에 바로 넣어줘도 되는데, JSX에서는 중괄호로 쳐줘야함

```
style={{color: 'red', fontSize : '16px'}}

특징 1. 중괄호 안에 중괄하
특징 2. 값을 따옴표 안에 넣어야됨
특징 3. 원래 font-size 와 같이 하이푼을 쓰던것드은, 하이푼을 지우고 카멜케이스로 작성해줘야함. 
```

<br><br>

## Layout 만들기

- App.js 에있는 App() 이라는 함수 내의 return 값에 이제 JSX 언어를 통해서 html 태그들을 만드는데
  한가지 유의할점은, return 안에 들어가는 첫번째 div 안에 모든걸 다 짜야한다. 영역을 나눠서 할 수 없음. 그러니까
  하나의 컴포넌트만 만들어야 된다는것과 동일함.

<br><br>

## State 란?

- 리액트에서 많이 사용되는 단어임
- 보통 우리는 자료 저장을 변수에 하는데, 리액트에는 state 라는 문법도 있다.
- state 를 사용하기 위해선 우선 파일 상단에 임포트를 시켜줘야 한다
- 그리고 화면 그리는 펑션 안에 useState(); 선언해줘야함 
- state 에 저장된 데이터를 사용하려면 변수 선언 키워드와 데이터를 뽑는 함수를 지정해줘야된다.
- 평범한 변수 선언 처럼 배열이나 객체도 가능 

```
import { useState } from 'react';

function App(){
  let [작명1, 작명2] = useState('저장하고싶은 데이터');
  //작명 1은 스테이트에 저장된 갑이고 작명2는 state 변경을 도와주는 함수이다. 
  //위의 작명은 ES6 의 Distructuring 이다. 

  let [작명3, 작명4] = useState([배열,배열2,배열3])
  
  return ( 
    <div> {작명1} </div>
  )    
}
```

**_왜 굳이 state 를 사용하는가_**
- 일반적으로 변수에 집어넣은 데이터를, 화면에 뿌려줄때, 갑자기 데이터가 변경된다면 클라이언트 단에서 새로고침 없이 바로 수정해주지 않는다.
근데 state 는 그게 가능하도록 해주기 때문에 사용한다.

<br><br>

**State 변경 하는법**
- 스테이트는 등호로 변경하면 안된다. 스테이트를 선언할때 기입한 두번째 변경함수를 사용해야만 딘다. 
- 변경함수(변경할값)
```
  let [like, likeChange] = useState(0);
  
  <h4>{title[0]} <span onClick={ () => { likeChnage(like++) } } >👍</span> { like }</h4>
```
- 변경함수로 배열,객체 등을 변경하는법
  - 무조건 state 를 Spread Operator 로 복사를 한 다음에, 새로 복사한 배열,객체의 값을 바꾸고, 기존 스테이트에
  다시 복사한 데이터를 넣어주어야 한다.

```
  let [title, change] = useState(['기초수업', '심화수업', '리액트수업','Java','Spring','vueJS']);

  function(){
    let copy = [...title] //복사한 데이터
    copy[0] = '바꾸고싶은 값' //복사한 데이터에서 변경하고자 하는 값을 바꿔줌 
    change(copy); //변경된 배열을 통채로 기존 state 에 값으로 넣어줌. 
  }
```
- state 변경 함수 특징
  - 기존 state 와 신규 state의 값이 동일하다면 변경해주지 않음. (일종의 에너지 절약임 )
  - array/object 특징 
    - reference data type 이라서 ... 써야됨. 잘 모르겠으면 스크립트 심화 강의 복습하기. 


## Component 문법
- html 을 한단위로 묶어버리는 React 전용 문법
  1. function 만들고 (펑션의 이름은 대문자로 시작해야됨) 변수에 집어 넣어도 상관은 없음. 
  2. return() 내부에 html 담기 
  3. <함수명></함수명> 으로 사용하거나 그냥 바로 닫아도 된다. <함수명/> 

```
<div className={modal}>
    <h4>제목</h4>
    <p>날짜</p>
    <p>상세내용</p>
</div>
```
- 컴포넌트를 만들어쓰면 좋은 케이스
  1. 반복적인 html 을 사용할 때 
  2. 큰 페이지들
  3. 자주 변경될만한 것들 

- 컴포넌트의 단점 
  1. state를 가져오려면 좀 불편해짐. 


<br><br>

## 동적인 UI 만드는 step
  1. 미리 디자인 만듬
  2. UI 의 현재 상태를 state 로 저장
  3. state 에 따라 UI 가 어떻게 보일지 작성 


<br><br>


## Map 함수 
- 반복문 
- 모든 배열 뒤에 사용 가능하다. 
- forEach랑 비슷함 
- return 값을 넣으면 Array에 담아서 반환해줌. 
  - forEach 와 동일하니, 배열의 인덱스 수만큼 return값 뱉어냄 

```
  const arr = [1,2,3,4]
  
  arr.map(function(item){
      return '1234' //['1234','1234','1234','1234']
    }
  )
  
```
<br><br>

## 같은 HTML 만들기 
- return 값 내부 html 태그 내에서 어떤 함수를 쓰려면 중괄호를 열어서 그안에다가 작성해주면 된다. 
- 근데 여기서는 일반적인 반복문은 사용못하고 Map 함수만 사용 가능하다. 
- 리액트에서는 배열안에 html 태그를 담아도 잘 보여줌 
- map 함수의 return 에 html 태그를 넣을때, 여러줄 길어지게 된다면 return () 소괄호 안에 넣어줘야 한다.
- 또, react 에서 반복문을 통해서 태그를 생성하면, 각 태그마다 고유의 키값을 가져야 한다. 안그러면 콘솔창에서 자꾸 경고메세지 뜸
에러까지는 아니지만.. 뭐 여튼 그래서 보통 인덱스로 키값을 넣는다고 한다. 자유롭게 해도 상관은 없음. 


```
 {
   title.map(function(item,index){
        return (
            <div className={"list"} key={index}>
                <h4>{ item } <span>👍</span> { like }</h4>
                <p>10월 31일 발행</p>
            </div>
        )
    })
 }
```

<br><br>

## 부모 useState 사용하기
- 메인 function 인 App 안에 작성된 변수나,함수나 기타 등등을 밖에서 사용하고 싶을때 
- props 를 사용하면 된다. 
  1. 부모 컴포넌트 내에, 자식 컴포넌트가 호출된 곳으로 가서 태그안에 부모 태그에서 사용할 state 이름을 적어준다. 
  2. 자식 컴포넌트로 이동해서 props 파라미터를 추가해준다(작명은 마음대론데 보통 props로 한다. )
  3. 파라미터.부모컴포넌트에서작명한이름 형태로 호출해서 사용할 수 있다. 
- props 는 무조건 부모 to 자식으로만 되지 반대로나, 형제끼리도 안된다. 
```
function App (){
  const [title, change] useState([1,2,3,4,5]);

  function 함수명() {
    console.log('hi')
  }

  <Modal titles = {title} color = "yellow" change = {change} />
  <Modal 작명 = {사용할state 이름} />

}


function Modal(props) {
    return (
        <div className="modal" style={{background:props.color}}>
            <h4>{props.titles[index]}</h4>
            <p>날짜</p>
            <p>상세내용</p>
            <button type="button" onClick ={()=>{ props.change(변경할값) }}
        </div>
    )
}
```

- props 는 인라인 태그 스타일에도 적용 가능함.
- 일반 문자도 전송 가능함. 
- 함수도 전송 가능하다. 
- useState 의 state 변경 함수도 함수기 때문에 props 사용이 가능하다.  
- state 는 컴포넌트들 중 최상위 컴포넌트에 만들어두는게 가장 좋다. 그래야 여러곳에서 props 를 통해 재사용이 가능하기 때문. 
- 자식 컴포넌트에도 함수선언이나 뭐 다 가능하지만, 자식 to 부모방향으로는 props 가 되지 않는걸 알아둬야 함. 

<br><br>

## 사용자 입력값 다루기 (input)
- HTML 문서에서 작성했을때와 다르게 input 은 반드시 닫는태그가 필요하다. 뿐만아니라 리액트에서는 모든 태가그 닫는태그가 필요함 
- 인풋 입력값 가져오기 
```
<input onChange ={(e) => {e.target.value}}></input>
```
<br><br>

## 옛날 Class 문법
- 요즘은 잘 안쓴다고 함
- 그냥 자바스크립트랑 다르게 반드시 constructor,super,render 3가지 함수가 다 들어가야 된다. 
- 근데 복잡하니깐 ... 요즘은 그냥 펑션만 쓴다. 
```
class Modal2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //state 만들기 
      name : "kim",
      age : 20,
    }
  }
  
  render(){
    return (
      <div> 하이 {this.state.name}
        <button onClick ={ () => { this.setState({age : 21}) }}
      </div>
    )
  }
}

```




<br><br>
## 유용한 문법들 
- React 에서 onCLick 쓸때에, 일반 html 과 다르게 카멜케이스로 작성해야 하고,함수 호출시 소괄호를 넣지 않음. 

- HTML 을 그려주는 함수 내부의 return 안에서는, 병렬구조의 태그가 들어갈 수없다. 그래서 wrap 의 역할과 비슷하게, 전체를
한 덩어리로 만들어줘야 하는데, 굳이 의미없늰 div 를 쓰기 싫으면 <></> 비어있는 태그만 넣어도 리액트에서는 잘 작동한다. 

- React return 문 안에서 if 문을 쓰려면 삼항연산자를 쓰면 된다. 
- return문 안에서 if 문을 쓰려면 중괄호를 열어서 그안에다가 작성하면 된다. 
```
function Main() {
  return (
    <div>
      {
        조건식 ? 참일때 실행할 코드 : 거짓일때 실행할 코드; 
        modal == 'show' ? <Modal/> : null
      }
    </div>
  )
}
```

- onClick 안에는 함수 여러개를 갖다가 넣어도 상관없다. 세미콜론으로 구분만 해주면 됨 
```
<h4 onClick={() => {modalOpen(); setModalTitle(b)}}>{a}</h4>
```
<br><br>

- useState 배열에 값 추가 및 삭제하는법 
- 추가하기
  1. 스테이트 변경 함수를 사용하면 된다.
  2. unshift 릁 통해서 카피본에 자료를 추가하고, 기존 state 값에 넣어준다.
  ```
  onClick ={ () => { 변경함수(배열이름 => [...배열이름, 추가할값] ) } }
  
  onClick ={ () => {
      const copyArr = [...배열이름]
      copyArr.unshift('추가할데이터')
      변경함수(copyArr);
   }
  }
  ```
- 삭제하기 
  1. filter 함수를 사용한다.
  2. filter 함수로 삭제할 녀석을 삭제해준다.
  3. 삭제된 배열을 다시 변경함수로 useState 의 값을 바꿔준다.

- 다른 삭제 방법
  1. 카피본 만들기
  2. 원하는 자료 삭제
  3. state 변경

```
 newArr = arr.filter(function(item) {
    return item !== 'delete' //delete 라는 이름을 가지지 않은 애들을 모두 남기겠다라는 뜻임 즉 delete 라는 이름 가진애는 삭제한다는 말 
  }
  변경함수(newArr)
 } 
 
 const copyArr = [...변경할배열]
 copyArr.splice(item, 1); //반복문의 item을 넣어줌 
 변경함수(copyArr);
 
```


<br><br>

## 기타 팁
- /* eslint-disable */ 파일 최 상단에 입력하면 터미널에 warning 안뜸. 
- function App() 안에 작성한 함수들이 동작할때, App() 안에 있는 페이지 자체가 새로 그려지는것 같음.
그래서 App 안에 어떤.. 페이지 로드시 실행되는 함수를 집어넣으면, 로드될때 두번 실행되고 뭔가 변화가 일어날떄 마다
계속해서 그 함수가 실행되니깐 이러한 함수는 App 밖으로 빼는게 맞는것 같음. 






















